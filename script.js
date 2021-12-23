let ul = document.getElementById('ul-list');
const enterTasks = document.getElementById('enter-tasks');
const btnInput = document.getElementById('btn-input');
const req = document.getElementById('required');

btnInput.addEventListener('click', function() {
  if(!enterTasks.value) {
    req.innerText = 'Required!';
  } else {
    req.innerText = '';
    let li = `
    <div class="box-list">
      <li>${enterTasks.value}</li>
      <button type="button" class="btn-delete" onclick="deleteTask(this)">delete</button>
    </div>`;

    ul.innerHTML += li;
    enterTasks.value = '';
  }
});

function deleteTask(x) {
  let deleteli = x.parentElement;
  deleteli.style.display = 'none';
}