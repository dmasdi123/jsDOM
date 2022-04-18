function getPilihanKomputer() {
    const komp = Math.random();

    if (komp < 0.34) return 'gajah';
    if (komp >= 0.34 && komp < 0.67) return 'orang';
    return 'semut';

}

function getHasil(komp, player) {
    if( player == komp ) return 'SERI!';
    if( player == 'gajah' ) return ( komp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( komp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( komp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function() {
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

function putar() {
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function() {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (i) {
    i.addEventListener('click', function() {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = i.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();

    setTimeout(function() {
        const imgKomputer = document.querySelector('.img-komputer');
        imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
    
        const info = document.querySelector('.info');
        info.innerHTML = hasil;
        }, 1000);
    });
});

