import axios from "axios";
const instance = axios.create({
  // baseURL: "http://localhost:5500/api/",
  baseURL: "https://evangadiforum2-1.onrender.com/api/",
  // baseURL: "https://evangadi-forum-backend-xi.vercel.app/api/",
});
export default instance;
