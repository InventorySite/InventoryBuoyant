
let officeResources = JSON.parse(localStorage.getItem('officeResources')) || [];

const form = document.getElementById('office-form');
const nameInput = document.getElementById('office-item-name');
const qtyInput = document.getElementById('office-quantity');
const list = document.getElementById('office-list');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const quantity = parseInt(qtyInput.value);
    if (!name || isNaN(quantity)) return;
    officeResources.push({ name, quantity });
    localStorage.setItem('officeResources', JSON.stringify(officeResources));
    renderOffice();
    form.reset();
});

function renderOffice() {
    list.innerHTML = '';
    officeResources.forEach((res, i) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${res.name}</h3><p>Qty: ${res.quantity}</p>
            <button onclick="deleteOffice(${i})">Delete</button>`;
        list.appendChild(div);
    });
}

function deleteOffice(i) {
    officeResources.splice(i, 1);
    localStorage.setItem('officeResources', JSON.stringify(officeResources));
    renderOffice();
}

renderOffice();
