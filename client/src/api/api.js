const ContentType = {
  "Content-type": "application/json; charset=utf-8",
};
export function post(url, param) {
  try {
    const params = {
      method: "POST",
      headers: {
        ...ContentType,
      },
      body: JSON.stringify(param),
    };
    return fetch("/api" + url, params);
  } catch (error) {
    console.log(error);
  }
}
export async function get(url) {
  try {
    const response = await fetch("/api" + url);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}
