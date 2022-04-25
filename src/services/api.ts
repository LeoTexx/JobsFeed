import axios from "axios";

const api = axios.create({
  baseURL: "https://us.jobfeed.com/data/info-recent-jobs",
});

export default api;
