const tUbahWarna = document.getElementById('tombol-ubah-warna');
tUbahWarna.addEventListener('click', function() {
    // document.body.style.backgroundColor = 'green';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
})


const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Random Color');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = `rgb(`+ r +`,`+ g +`,`+ b +`)`;
});

const sMerah = document.querySelector('input[name=sMerah]');
const sBiru = document.querySelector('input[name=sBiru]');
const sHijau = document.querySelector('input[name=sHijau]');

sMerah.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.backgroundColor = `rgb(`+ r +`,`+ g +`,`+ b +`)`;
});

sHijau.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.backgroundColor = `rgb(`+ r +`,`+ g +`,`+ b +`)`;
});

sBiru.addEventListener('change', function() {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.backgroundColor = `rgb(`+ r +`,`+ g +`,`+ b +`)`;
});