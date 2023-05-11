# Test task - Notes

This application works with two types of databases: indexedDB and QuintaDB.

By default, indexedDB is used. To make the application start using QuintaDB, you
need to make changes to the .env file:

REACT_APP_PROVIDER_DB_NOTE_APP=quintadb REACT_APP_KEY_QUINTAD_DB=<Personal_KEY>
