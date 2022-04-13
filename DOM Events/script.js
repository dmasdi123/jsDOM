const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksBaru);
    ul.appendChild(liBaru);
});