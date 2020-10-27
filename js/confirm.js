let fullNameDOM = document.querySelector('#full_name');
let emailDOM = document.querySelector('#email');

let name = localStorage.getItem('name');
let lastname = localStorage.getItem('lastname');
let email = localStorage.getItem('email');

fullNameDOM.innerHTML = name + ' ' + lastname;
emailDOM.innerHTML = email;