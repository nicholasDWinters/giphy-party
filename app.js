const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('#searchBtn');
const removeBtn = document.querySelector('#removeBtn');
const picContainer = document.querySelector('#picContainer');

searchBtn.addEventListener('click', function (e) {
    e.preventDefault();
    getGiphy();
    searchInput.value = '';
})

removeBtn.addEventListener('click', function (e) {
    e.preventDefault();
    $('img').remove();
})

async function getGiphy() {
    try {

        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchInput.value}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
        const rand = Math.floor(Math.random() * 50) + 1;
        const url = res.data.data[rand].images.downsized.url;
        createImg(url);

    } catch (e) {
        alert("Sorry, couldn't find a match! Try again!");
    }
}

function createImg(url) {
    const img = document.createElement('img');
    img.setAttribute('src', url);
    picContainer.append(img);
}