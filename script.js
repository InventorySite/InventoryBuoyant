
const officeResources = JSON.parse(localStorage.getItem('officeResources')) || [];

function renderOffice() {
    const container = document.getElementById('office-container');
    container.innerHTML = '';
    officeResources.forEach(res => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${res.name}</h3><p>Qty: ${res.quantity}</p>`;
        container.appendChild(div);
    });
}

window.onload = renderOffice;
