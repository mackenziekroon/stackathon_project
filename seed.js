const db = require("./server/db/db");
const Question = require("./server/db/models/Question");

async function seed() {
  await db.sync({ force: true });

  const questions = await Promise.all([
    Question.create({
      question: "Guess the breed...",
      image:
        "https://images.theconversation.com/files/342682/original/file-20200618-41213-iu7wbs.jpg?ixlib=rb-1.1.0&rect=9%2C4%2C3268%2C2177&q=45&auto=format&w=926&fit=clip",
      answerOne: "French Bulldog",
      answerTwo: "English Bulldog",
      answerThree: "Mastiff",
      answerFour: "Husky",
      correctAnswer: "English Bulldog",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-1200x628-FACEBOOK-1200x628.jpg",
      answerOne: "Pug",
      answerTwo: "Puggle",
      answerThree: "Beagle",
      answerFour: "French Bulldog",
      correctAnswer: "Pug",
    }),
  ]);

  console.log("seeded questions");
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
