const ContentType = {
    "Content-type": "application/json; charset=utf-8",
  },
  Authorization = `Bearer ${localStorage.getItem("TokenUniNet")}`;
export async function post(url, body, content = null){
  return fetch("/api" + url, {
    method: "POST",
    headers: {
      Authorization,
      ...(content ? content : ContentType),
    },
    body: JSON.stringify(body),
  }).catch((err) => console.log(err));
}
export async function get(url, body = null, content = null) {
  return fetch(
    "/api" + url,
    !body
      ? {
        method: "GET",
        headers: {
          Authorization,
        },
      } : {
        method: "POST",
        headers: {
          Authorization,
          ...(content ? content : ContentType),
        },
        body: JSON.stringify(body),
      } 
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
