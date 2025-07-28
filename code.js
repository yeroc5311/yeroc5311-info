// mode toggle
document.getElementById('toggle-mode').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.body.classList.toggle('light');
});

// simple guestbook counter + local store
const entriesEl = document.getElementById('entries');
const counterEl = document.getElementById('counter');
const form = document.getElementById('guest-form');
const input = document.getElementById('guest-input');

// load from localStorage (or fetch guestbook.json)
let entries = JSON.parse(localStorage.getItem('guestEntries') || '[]');
updateGuestbook();

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!input.value) return;
  entries.push(input.value);
  localStorage.setItem('guestEntries', JSON.stringify(entries));
  input.value = '';
  updateGuestbook();
});

function updateGuestbook() {
  entriesEl.innerHTML = '';
  entries.forEach(msg => {
    const li = document.createElement('li');
    li.textContent = msg;
    entriesEl.appendChild(li);
  });
  counterEl.textContent = entries.length;
}