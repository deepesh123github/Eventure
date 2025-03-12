const users = [
    { username: "john_doe", email: "john@example.com", phone: "9876543210", age: 28 },
    { username: "jane_doe", email: "jane@example.com", phone: "8765432109", age: 25 },
    { username: "neha123",  email: "neha@example.com", phone: "7654321098", age: 27 },
    { username: "harsh123",  email: "neha@example.com", phone: "7654321056", age: 25 }
];

const tableBody = document.getElementById("userTableBody");

users.forEach(user => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${user.username}</td><td>${user.email}</td><td>+91 ${user.phone}</td><td>${user.age}</td>`;
    tableBody.appendChild(row);
});