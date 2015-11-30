var verse = get('/api/random');

$('.verse').text(verse.text);

function get(url) {
    return fetch(url, {
        credentials: 'same-origin'
    }).then(function (res) {
        return res.json();
    });
}
