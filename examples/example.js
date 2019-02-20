const _ = require("lodash");
const faker = require("faker");
import compileDbData from "../lib/generators";

//Schemas
const usersSchema = () => ({
  key: "users",
  id: faker.unique(faker.random.uuid),
  username: faker.unique(faker.internet.userName),
  password: faker.internet.password(),
  avatarUrl: faker.image.avatar(150, 150, true),
  questions: [],
  answers: {}
});

const decksSchema = () => ({
  key: "decks",
  id: faker.unique(faker.random.uuid),
  title: _.upperFirst(faker.hacker.ingverb()),
  imgUrl: faker.image.technics(720, 1440, true),
  questions: [
    {
      question: `How to ${faker.hacker.verb()}?`,
      answer: faker.hacker.phrase()
    },
    {
      question: `How to ${faker.hacker.verb()}?`,
      answer: faker.hacker.phrase()
    },
    {
      question: `How to ${faker.hacker.verb()}?`,
      answer: faker.hacker.phrase()
    }
  ]
});

compileDbData([usersSchema, decksSchema]);
