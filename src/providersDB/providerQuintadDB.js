//https://quintadb.com/apps.json?rest_api_key=dcPCoxW4PdN7JdSSoQhmok

const ProviderQuintadDB = class {
  // Interface function -----------------
  readNotes = async filter => {
    // const listNotes = await this.getAllNotes(this.#TABLE_NEME_NOTES);
    // return listNotes.filter(note =>
    //   note.content.toUpperCase().includes(filter)
    // );
  };

  deleteNote = async idNote => {
    // await this.deleteById(this.#TABLE_NEME_NOTES, idNote);
  };

  addNote = async newNote => {
    // const newElement = await this.addToTable(this.#TABLE_NEME_NOTES, newNote);
    // return newElement;
  };

  saveNote = async note => {
    // const updateNote = await this.updateById(this.#TABLE_NEME_NOTES, note);
    // return updateNote;
  };
};

export default ProviderQuintadDB;
