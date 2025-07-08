import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }

export const fetchFromApi = async (URL) => {
  const { data } = await axios.get(`${BASE_URL}/${URL}`, options);
  console.log(data)
  return data;
};
