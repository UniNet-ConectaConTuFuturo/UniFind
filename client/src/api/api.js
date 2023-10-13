const ContentType = {
  "Content-type": "application/json; charset=utf-8",
};
const post = (url, param, content = null) =>
  fetch("/api" + url, {
    method: "POST",
    headers: {
      ...(content ? content : ContentType),
    },
    body: JSON.stringify(param),
  }).catch((err) => console.log(err));

const get = (url, body, content = null) =>
  fetch(
    "/api" + url,
    body
      ? {
          method: "POST",
          headers: {
            ...(content ? content : ContentType),
          },
          body: JSON.stringify(body),
        }
      : null
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

export { get, post };
