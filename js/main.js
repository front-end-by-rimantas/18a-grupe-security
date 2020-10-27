"use strict";
(function () {

    var nameDOM = document.querySelector('#name');
    var lastnameDOM = document.querySelector('#lastname');
    var emailDOM = document.querySelector('#email');
    var passwordDOM = document.querySelector('#pass');
    var buttonDOM = document.querySelector('button');

    var name = localStorage.getItem('name');
    var lastname = localStorage.getItem('lastname');
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');

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


    var transfer = (amount) => {
        var magic = 'abra kadabra';
        return amount;
    }

})();




(function () {
    console.log('triple -=xXx=-');
})()



const pazymiai = [10, 8, 4, 8, 7, 5];

console.log(pazymiai.map(pazimys => Math.ceil(pazimys / 2)));


const zodziai = ['labas', 'rytas', 'ka', 'tu', 'veiki'];

const pirmosRaides = zodziai.map(zodis => zodis[0])

console.log(pirmosRaides);

console.log(pazymiai.map(x => x * x));

console.log(zodziai.filter(z => z.includes('a')));

console.log(pazymiai.filter(p => p >= 6 && p < 9));

const vidurkis = pazymiai.reduce((total, num) => total + num, 0) / pazymiai.length;

console.log(vidurkis);

console.log(pazymiai.sort((a, b) => b - a));
console.log(zodziai.sort());