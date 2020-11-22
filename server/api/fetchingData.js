import client from "./client";

const getQuestions = () => client.get();

export default {
  getQuestions,
};
