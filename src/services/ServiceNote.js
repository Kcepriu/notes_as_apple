import { newNote, fieldNeedSave } from 'constants/constantNote';
import pick from 'lodash.pick';

import ProviderPsevdoList from 'providersDB/testPsevdoList';
import ProviderIndexedDB from 'providersDB/providerIndexedDB';
import ProviderQuintadDB from 'providersDB/providerQuintadDB';

const ServiceNote = class {
  #cacheNotes = [];

  constructor(providerDB) {
    this.providerDB = providerDB;
  }

  readNotes = async filter => {
    // * Read from DataBases
    const upperFilter = filter.toUpperCase();

    this.#cacheNotes = await this.providerDB.readNotes(upperFilter);

    return [...this.#cacheNotes];
  };

  readNotesFromCache = async () => {
    return [...this.#cacheNotes];
  };

  deleteNote = async idNote => {
    // * delete note in DataBases

    // * 1 Delete from Databases
    await this.providerDB.deleteNote(idNote);
    // * 2 Change cache
    this.#cacheNotes = this.#cacheNotes.filter(note => note.id !== idNote);
  };

  addNote = async () => {
    // * 1 Add to databases
    const newElement = await this.providerDB.addNote(newNote);
    // * 2 Change cache
    this.#cacheNotes.push(newElement);

    return newElement;
  };

  saveNote = async note => {
    const saveNote = pick(note, fieldNeedSave);

    // * 1 Save info to databases
    const saveElement = await this.providerDB.saveNote(saveNote);
    // * 2 Change cache
    const index = this.#cacheNotes.findIndex(element => element.id === note.id);

    if (index === -1) {
      //Error cache
      throw new Error('Error saving note');
    }

    this.#cacheNotes[index] = saveElement;

    return { ...saveElement, editing: true };
  };
};

const typeProvider = process.env.REACT_APP_PROVIDER_DB_NOTE_APP;

let tmpServiceNote;

switch (typeProvider) {
  case 'testList':
    tmpServiceNote = new ServiceNote(new ProviderPsevdoList());
    break;

  case 'quintadb':
    tmpServiceNote = new ServiceNote(new ProviderQuintadDB());
    break;

  default:
    tmpServiceNote = new ServiceNote(new ProviderIndexedDB());
}

const serviceNote = tmpServiceNote;

export default serviceNote;
