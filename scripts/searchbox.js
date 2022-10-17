const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=';

function submitted(event) {
  event.preventDefault();
  const url = google + '+' + q.value;
  location.assign(url);
}

f.addEventListener('submit', submitted);
