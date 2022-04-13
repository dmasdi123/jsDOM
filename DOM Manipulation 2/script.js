//make new element----------------------------------------
const pBaru = document.createElement('p');
const textBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan ke dalam paragraf
pBaru.appendChild(textBaru);
//simpan pBaru diakhir section A
const sectionA = document.getElementById('a');
sectionA.append(pBaru);

//menambahkan element di tengah tengah li
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.append(teksLiBaru);
const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');
ul.insertBefore(liBaru, li2);

//menghapus child
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//mengganti child
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru h2');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);
