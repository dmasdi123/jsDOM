//dom selection -> element
const judul = document.getElementById("judul");

judul.style.color = 'red';
judul.style.backgroundColor = 'black';
judul.innerHTML= 'Febrian Dimas Winaputra';

// dom selection -> htmlcollection
const p = document.getElementsByTagName('p');

p[0].innerHTML = 'hello';


//dom selection -> element with queryselector
const p4 = document.querySelector('#b p');
p4.style.backgroundColor = 'green'; 

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'gray'