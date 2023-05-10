import axios from 'axios';

const URL = 'https://quintadb.com';

// * Initial Data
export const createDatabasesForm = async config => {
  const id = await getIdDatabases(config);
  if (id) {
    config.idDatabase = id;
    await createForm(config);
  }

  await createDatabases(config);
};

export const createDatabases = async config => {
  const { data } = await axios.post(
    `/apps.json`,
    {
      rest_api_key: config.key,
      database_name: config.nameDatabase,
      form_name: config.nameForm,
    },
    {
      baseURL: URL,
      signal: config.controller.signal,
    }
  );

  if (data.error) return;

  await getIdDatabasesForm(config);
};

export const createForm = async config => {
  const { data } = await axios.post(
    `/apps/${config.idDatabase}/entities.json`,
    {
      rest_api_key: config.key,
      name: config.nameForm,
    },
    {
      baseURL: URL,
      signal: config.controller.signal,
    }
  );

  if (data.error) return;

  config.idForm = data.form.id;
};

export const createField = async (config, nameField, typeField) => {
  console.log('Create field');

  const { data } = await axios.post(
    `/apps/${config.idDatabase}/entities/${config.idForm}/properties.json`,
    {
      rest_api_key: config.key,
      name: nameField,
      type_name: typeField,
    },
    {
      baseURL: URL,
      signal: config.controller.signal,
    }
  );

  if (data.error) throw new Error('Error create field');
};

// * Read Write DATA
export const getIdDatabasesForm = async config => {
  const { data } = await axios.get('/apps/search/entities/search.json', {
    baseURL: URL,
    params: {
      rest_api_key: config.key,
      database_name: config.nameDatabase,
      form_name: config.nameForm,
    },
  });

  if (data.error) return;

  config.idDatabase = data.form.app_id;
  config.idForm = data.form.id;
};

export const getIdDatabases = async config => {
  const { data } = await axios.get('/apps/search.json', {
    baseURL: URL,
    params: {
      rest_api_key: config.key,
      name: config.nameDatabase,
    },
  });
  if (data.error) return;

  return data.database.id;
};

export const getAllRecords = async config => {
  const { data } = await axios.get(
    `/apps/${config.idDatabase}/dtypes/entity/${config.idForm}.json`,
    {
      baseURL: URL,
      params: {
        rest_api_key: config.key,
        page: 1,
        name_value: 1,
      },
    }
  );
  if (data.error) return;
  return data.records;
};

export const deleteRecords = async (config, id) => {
  await axios.delete(
    `/apps/${config.idDatabase}/dtypes/${id}.json`,
    {
      rest_api_key: config.key,
    },
    {
      baseURL: URL,
    }
  );
};

export const addRecord = async (config, newRecord) => {
  const copyNewRecord = { ...newRecord, entity_id: config.idForm };

  console.log(JSON.stringify(copyNewRecord));

  const { data } = await axios.post(
    `/apps/${config.idDatabase}/dtypes.json`,
    {
      rest_api_key: config.key,
      json_values: JSON.stringify(copyNewRecord),
    },
    {
      baseURL: URL,
    }
  );

  console.log(data);

  if (data.error) throw new Error('Error add record');

  return data.record;
};

export const updateRecord = async (config, id, data) => {};

export const getFields = async config => {
  const { data } = await axios.get(
    `/apps/${config.idDatabase}/entities/${config.idForm}/properties.json`,
    {
      baseURL: URL,
      params: {
        rest_api_key: config.key,
      },
    }
  );
  if (data.error) throw new Error('Error getting fields');

  return data.fields;
};
