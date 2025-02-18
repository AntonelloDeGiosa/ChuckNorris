document.getElementById('btn').addEventListener('click', function (e) {
    e.preventDefault();

    const categoria = document.getElementById('option').value;
    let url = 'https://api.chucknorris.io/jokes/random';

    if (categoria !== '0') {
        url += `?category=${categoria}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('battuta').innerHTML = `<p>"${data.value}"</p>`;
        })
        .catch(error => console.error('Error fetching joke:', error));
}); 
