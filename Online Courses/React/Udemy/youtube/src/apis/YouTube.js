import axios from "axios";

const KEY = "AIzaSyAdmEDoHQUodhtI5L3Ny0PWr-ApQeknf9w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
