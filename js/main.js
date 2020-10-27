let nameDOM = document.querySelector('#name');
let lastnameDOM = document.querySelector('#lastname');
let emailDOM = document.querySelector('#email');
let passwordDOM = document.querySelector('#pass');
let buttonDOM = document.querySelector('button');

let name = localStorage.getItem('name');
let lastname = localStorage.getItem('lastname');
let email = localStorage.getItem('email');
let password = localStorage.getItem('password');

nameDOM.value = name;
lastnameDOM.value = lastname;
emailDOM.value = email;
passwordDOM.value = password;

buttonDOM.addEventListener('click', (e) => {
    console.log(e.preventDefault());

    if (nameDOM.value.indexOf('<') >= 0 ||
        nameDOM.value.indexOf('>') >= 0 ||
        nameDOM.value.indexOf('/') >= 0) {
        console.log('ERROR');
        return;
    }

    localStorage.setItem('name', nameDOM.value);
    localStorage.setItem('lastname', lastnameDOM.value);
    localStorage.setItem('email', emailDOM.value);
    localStorage.setItem('password', passwordDOM.value);

    location.href = "./confirm";
})