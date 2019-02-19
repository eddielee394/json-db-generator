## Overview
Simple node based data generator used to create development data sets on the fly for expedited js application development.  Also generates a json server for mock api requests.

**WORK IN PROGRESS**

## Usage
- create schemas
- import `compileDbData(schema)` method

```
import compileDbData from 'json-db-generator'

compileDbData(schemas:array)
```

## Packages in use:
[Faker.js](https://github.com/Marak/faker.js)

[Json Server](https://github.com/typicode/json-server)