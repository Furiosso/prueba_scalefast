let responseField = document.querySelector('#response-field')
let html = '';

const getData = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        html += "<li><h1>Loading...</h1></li>";
        responseField.innerHTML = html;
        if (response.ok) {
            users = await response.json();
            displayInformation(users);
            return;
        }
        throw new Error('Request failed!');
    } catch (error) {
        alert(error);
    }
};


const displayInformation = (users) => {
    html = '';
    for (i in users) {
        html += `<li class=data>
            <table>
            <tr><td><strong>Name:</strong></td><td> ${users[i].name}</td></tr>
            <tr><td><strong>Username:</strong></td><td> ${users[i].username}</td></tr>
            <tr><td><strong>Email:</strong></td><td> ${users[i].email}</td></tr>
            <tr><td><strong>Phone:</strong></td><td> ${users[i].phone}</td></tr>
            <tr><td><strong>Adress:</strong></td><td> ${users[i].address.street}, ${users[i].address.suite}, </td></tr>
            <tr><td></td><td> ${users[i].address.city} ${users[i].address.zipcode}</td></tr>
            </table>
        </li>`;
    }
    responseField.innerHTML = html;
}

getData();