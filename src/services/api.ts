import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/`;
const ACCESS_KEY = `8qD0fg3zVKNsMrqLPyV2JQMBmsLdKbiOofss9NFZ-0w`;

export const fetchImages = async <T>(
  page: number,
  query: string
): Promise<T | undefined> => {
  const response = await axios.get<T>(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};
