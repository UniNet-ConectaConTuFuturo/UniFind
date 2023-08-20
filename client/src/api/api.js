const ContentType = {
  "Content-type": "application/json; charset=utf-8",
};
export async function post(url, param) {
  try {
    const params = {
      method: "POST",
      headers: {
        ...ContentType,
      },
      body: JSON.stringify(param),
    };
    const response = await fetch("/api" + url, params);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
export async function get(url) {
  try {
    const response = await fetch("/api" + url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
