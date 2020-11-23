const db = require("./server/db/db");
const Question = require("./server/db/models/Question");

async function seed() {
  await db.sync({ force: true });

  const questions = await Promise.all([
    Question.create({
      question: "Guess the breed...",
      image:
        "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/04062810/shiba-inu2-940x503.jpg",
      answerOne: "Shiba Inu",
      answerTwo: "Chow Chow",
      answerThree: "Jindo",
      answerFour: "Dingo",
      correctAnswer: "Shiba Inu",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://images.theconversation.com/files/342682/original/file-20200618-41213-iu7wbs.jpg?ixlib=rb-1.1.0&rect=9%2C4%2C3268%2C2177&q=45&auto=format&w=926&fit=clip",
      answerOne: "French Bulldog",
      answerTwo: "Danish Bulldog",
      answerThree: "English Bulldog",
      answerFour: "Mastiff",
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
    Question.create({
      question: "Guess the breed...",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/11123543/Beagles-standing-in-a-frosty-field-on-a-cold-morning.jpg",
      answerOne: "Otterhound",
      answerTwo: "English Foxhound",
      answerThree: "Beagle",
      answerFour: "Basset Hound",
      correctAnswer: "Beagle",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://s3.amazonaws.com/petcentral.com/wp-content/uploads/2016/09/11172316/bernese-mountain-dog1.jpg",
      answerOne: "Kuvasz",
      answerTwo: "Bullmastiff",
      answerThree: "Bernese Mountain Dog",
      answerFour: "Anatolian Shepherd",
      correctAnswer: "Bernese Mountain Dog",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://www.k9rl.com/wp-content/uploads/2016/08/Mudi-dog-breed-image-825x510.jpg",
      answerOne: "German Spitz",
      answerTwo: "Puli",
      answerThree: "Border Collie",
      answerFour: "Mudi",
      correctAnswer: "Mudi",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://dgicdplf3pvka.cloudfront.net/images/dogbreeds/large/Norwegian-Lundehund.jpg",
      answerOne: "Norwegian Lundehund",
      answerTwo: "Puli",
      answerThree: "Border Collie",
      answerFour: "Varanger Dog",
      correctAnswer: "Norwegian Lundehund",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://topdogtips.com/wp-content/uploads/2017/04/Catahoula-Leopard-Dog-Breed-Information.jpg",
      answerOne: "Blue Heeler",
      answerTwo: "Australian Cattle Dog",
      answerThree: "Catahoula Leopard Dog",
      answerFour: "Bluetick Coonhound",
      correctAnswer: "Catahoula Leopard Dog",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/20113314/Carolina-Dog-standing-outdoors.jpg",
      answerOne: "Australian Dingoes",
      answerTwo: "German Shepherd",
      answerThree: "Canaan Dog",
      answerFour: "Carolina Dog",
      correctAnswer: "Carolina Dog",
    }),
    Question.create({
      question: "Guess the breed...",
      image:
        "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/04123313/Lagotto-Romagnolo-standing-by-a-pond.jpg",
      answerOne: "Poodle",
      answerTwo: "Barbet",
      answerThree: "Lagotto Romagnolo ",
      answerFour: "Labradoodle",
      correctAnswer: "Lagotto Romagnolo ",
    }),
    Question.create({
      question: "Great Job!!!",
      image:
        "https://moundspet.com/wp-content/uploads/2011/05/iStock_000077476163_Full.jpg",
      answerOne: " ",
      answerTwo: " ",
      answerThree: " ",
      answerFour: " ",
      correctAnswer: " ",
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
