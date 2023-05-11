import { newNote } from '../constants/constantNote';

import * as ApiDB from 'services/apiQuintadDB';

const KEY = process.env.REACT_APP_KEY_QUINTAD_DB;

// "id": "ddQ8kJW5bdVAlcPmksDCka",
// "app_id": "a-W7ZdR8nfWRNcSw7dJSow",

// /apps/a-W7ZdR8nfWRNcSw7dJSow/dtypes/entity/ddQ8kJW5bdVAlcPmksDCka.json
// 1683722801714

const NAME_DATABASE = 'NotesDB';
const NAME_FORM = 'Notes';

const ProviderQuintadDB = class {
  #CONFIG_CONNECT = {
    nameDatabase: NAME_DATABASE,
    nameForm: NAME_FORM,
    key: KEY,
    idDatabase: null,
    idForm: null,
    controller: null,
  };
  #CODE_DECODE = {};

  isConnect() {
    return this.#CONFIG_CONNECT.idDatabase && this.#CONFIG_CONNECT.idForm;
  }

  async createCodeDecodeField() {
    const data = await ApiDB.getFields(this.#CONFIG_CONNECT);

    const codeDecode = data.reduce(
      (acum, element) => {
        acum[element.name] = element.id;
        acum[element.id] = element.name;
        return acum;
      },
      { id: 'id' }
    );

    this.#CODE_DECODE = codeDecode;
  }

  // ------
  async connectDb(controller) {
    this.#CONFIG_CONNECT.controller = controller;

    await ApiDB.getIdDatabasesForm(this.#CONFIG_CONNECT);

    if (!this.isConnect()) {
      //create DB and FoRm and Fields
      await this.initialData();
    }

    if (!this.isConnect()) throw new Error('Error conect to database');

    //TODO читати назви полів

    await this.createCodeDecodeField();
  }

  async initialData() {
    // * createDatabases
    await ApiDB.createDatabasesForm(this.#CONFIG_CONNECT);

    // * createFields
    await this.createFields();
  }

  async createFields() {
    await ApiDB.createField(this.#CONFIG_CONNECT, 'title', 'string');
    await ApiDB.createField(this.#CONFIG_CONNECT, 'content', 'text');
    await ApiDB.createField(this.#CONFIG_CONNECT, 'date', 'integer');
  }

  // Interface function -----------------
  readNotes = async (filter, controller) => {
    if (!this.isConnect()) await this.connectDb(controller);

    const listNotes = await ApiDB.getAllRecords(this.#CONFIG_CONNECT);

    const decodeListNote = listNotes.map(note => this.decodeNote(note));

    return decodeListNote.filter(note =>
      note.content.toUpperCase().includes(filter)
    );
  };

  deleteNote = async idNote => {
    await ApiDB.deleteRecords(this.#CONFIG_CONNECT, idNote);
  };

  addNote = async newNote => {
    const codeNote = this.codeNote(newNote);
    const newElement = await ApiDB.addRecord(this.#CONFIG_CONNECT, codeNote);

    const decodeNote = this.decodeNote(newElement);

    return decodeNote;
  };

  saveNote = async note => {
    const codeNote = this.codeNote(note);
    const updateNote = await ApiDB.updateRecord(
      this.#CONFIG_CONNECT,
      note.id,
      codeNote
    );

    const decodeNote = this.decodeNote(updateNote);

    return decodeNote;
  };

  codeNote(note) {
    const result = {};
    for (const key of Object.keys(note)) {
      const newKey = this.#CODE_DECODE[key];
      if (!newKey) continue;
      result[newKey] = note[key];
    }

    return result;
  }

  decodeNote = note => {
    const decodeValue = this.codeNote(note.values);

    const result = { ...newNote, id: note.id, ...decodeValue };
    return result;
  };
};

export default ProviderQuintadDB;
