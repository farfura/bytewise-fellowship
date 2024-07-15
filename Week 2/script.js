const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  if (inputBox.value === '') {
    alert('You must write something');
  } else {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `
      <input type="checkbox" class="form-check-input" />
      <span>${inputBox.value}</span>
      <span class="delete-btn">&times;</span>
    `;
    listContainer.appendChild(li);
    saveData();
  }
  inputBox.value = '';
}

listContainer.addEventListener('click', function (e) {
  if (e.target.tagName === 'INPUT') {
    e.target.parentElement.classList.toggle('checked');
    saveData();
  } else if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();
