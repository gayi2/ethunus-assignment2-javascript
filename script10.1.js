// For register.html
const form = document.getElementById('registerForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const address = document.getElementById('address').value.trim();

    if (!name || !email || !contact || !address) {
      alert("All fields are required!");
      return;
    }

    const user = { name, email, contact, address };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    alert("User registered successfully!");
    form.reset();
  });
}

// For view.html
const tableBody = document.querySelector('#userTable tbody');
if (tableBody) {
  const users = JSON.parse(localStorage.getItem('users')) || [];

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.contact}</td>
      <td>${user.address}</td>
    `;
    tableBody.appendChild(row);
  });
}
