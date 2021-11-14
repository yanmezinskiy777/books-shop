const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_YOUR_TOKEN,
});

const api = async ({ type }) =>
  await client.getEntries({
    content_type: type,
  });

export default api;
