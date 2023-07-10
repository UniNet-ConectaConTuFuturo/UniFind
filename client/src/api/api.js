const ContentType = {
  "Content-type": "application/json; charset=utf-8",
};
export function post(url, param) {
  const params = {
    method: "POST",
    headers: {
      ...ContentType,
    },
    body: JSON.stringify(param),
  };
  return fetch("/api" + url, params);
}
export function get(url) {
  return fetch("/api" + url);
}
