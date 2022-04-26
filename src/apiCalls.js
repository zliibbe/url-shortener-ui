export const getUrls = () => {
  return fetch('http://localhost:3003/api/v1/urls')
      .then(response => response.json())
      .catch(error => console.warn(error))
}

export const postUrl = (newUrl) => {
  return fetch("http://localhost:3003/api/v1/urls", {
    method: "POST",
    body: JSON.stringify(newUrl),
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        "This is unable to be added."
      );
    } else {
      return response.json();
    } //2nd .then in App
  })
}
