const apiKey = '20328983-97c171d0912a39316d7306b5c';

export default fetch(
  `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=black&page=1&per_page=12&key=${apiKey}`,
)
  .then(response => {
    return response.json();
  })
  .catch(console.log);
