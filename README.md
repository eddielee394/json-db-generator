## Overview
Simple node based data generator used to create development data sets on the fly for expedited js application development.  Also generates a json server for mock api requests.

**WORK IN PROGRESS**

## Usage
- create schemas (See examples)
- fire the `compileDbData(schema)` & a db.json file will be generated for you.
- You can also run the npm scripts to start the json server and your data will be accessible via http requests.

```
import compileDbData from 'json-db-generator'

compileDbData([schemas])
```

### Schemas
Schemas should be a function that returns an object.  The only required property is the `key` property which is used to identify each schema & api path.

See the [Faker.js](https://github.com/Marak/faker.js) docs for specific api parameters for custom data rendering.   You can also check out the [basic schema examples](./examples) in this package

## NPM scripts
There's some [example scripts](package.json) that can be copied over to your package.json file as well.

## Mock API Requests
If using the json server, once you generate your db.json file you can then access each schema key via the api routes.  For example:  
`http://localhost:4000/api/posts` will return a json object consisting of the entries in your `posts` schema.  For more details, check out the [Json Server](https://github.com/typicode/json-server) docs.

## Packages in use:
[Faker.js](https://github.com/Marak/faker.js)

[Json Server](https://github.com/typicode/json-server)

## Notes
If you're running android studio emulator, any api requests have to be directed to:  `http://10.0.2.2:4000`.  [More info](  https://stackoverflow.com/questions/5495534/java-net-connectexception-localhost-127-0-0-18080-connection-refused)
If using Axios, an example request would look something like this:
```
static fetchDecks = () => axios.get('http://10.0.2.2:4000/api/decks');
```
