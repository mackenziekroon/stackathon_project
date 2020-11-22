import axios from "axios";

const dbData = axios.create({
  baseURL: "http://localhost:8080/api/questions",
});

export default dbData;
