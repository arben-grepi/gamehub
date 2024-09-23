import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api", // This should be baseURL, not part of params
  params: {
    key: "b8ff03a534b04fec9cb728480f92c393", // The API key is passed as a query parameter
  },
});
