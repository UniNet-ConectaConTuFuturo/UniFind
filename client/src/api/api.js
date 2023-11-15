const ContentType = {
    "Content-type": "application/json; charset=utf-8",
  },
  Authorization = `Bearer ${localStorage.getItem("TokenUniNet")}`;
export const post = (url, body, content = null) =>
  fetch("/api" + url, {
    method: "POST",
    headers: {
      Authorization,
      ...(content ? content : ContentType),
    },
    body: JSON.stringify(body),
  }).catch((err) => console.log(err));

export function get(url, body = null, content = null) {
  fetch(
    "/api" + url,
    body
      ? {
          method: "POST",
          headers: {
            Authorization,
            ...(content ? content : ContentType),
          },
          body: JSON.stringify(body),
        }
      : {
          method: "GET",
          headers: {
            Authorization,
          },
        }
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
