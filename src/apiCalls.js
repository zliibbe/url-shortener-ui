export const getUrls = () => {
  return fetch('http://localhost:3003/api/v1/urls')
      .then(response => response.json())
      .catch(error => console.warn(error))
}

export const postUrl = () => {

}
