import axios from "axios";

const KEY = '35692508-ed297a5167f9400201d2ec2b1';
const BASE_URL = 'https://pixabay.com/api/';

export const pixabayApi = async (name, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = response.data;
  return data;
};

