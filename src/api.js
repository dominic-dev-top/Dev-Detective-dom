const BASE_URL = "https://api.github.com/users/";

export async function fetchData(username) {
  const requestURL = `${BASE_URL}${username}`;

  try {
    const response = await fetch(requestURL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching data from the API");
  }
}