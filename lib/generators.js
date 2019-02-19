const fs = require("fs");
const faker = require("faker");
const _ = require("lodash");

/**
 *
 * @param key Dataset object key
 * @param schema dataset schema
 * @param count Number of iterations for each item in the dataset
 * @return {{}}
 */
function generateData(key, schema, count = 10) {
  // generate data
  let data = { [key]: [] };

  for (let i = count; i >= 0; i--) {
    data.decks.push(schema);
  }

  return data;
}

/**
 * Writes data to a .json file
 * @param data
 */
function writeDataToFile(data) {
  fs.mkdir(__dirname + "/static", { recursive: true }, err => {
    if (err && err.code != "EEXIST") {
      console.error("There was an error creating the db directory: ", err);
    } else {
      fs.writeFile(
        __dirname + "/static/db.json",
        JSON.stringify(data),
        function(err) {
          if (err) {
            console.error(err.message);
          } else {
            console.log("db data generated successfully!");
          }
        }
      );
    }
  });
}

/**
 * Compiles the schemas
 * @param schemas
 */
function compileDbData([schemas]) {
  const data = {
    ...generateData(schemas)
  };

  return writeDataToFile(data);
}

export default compileDbData;
