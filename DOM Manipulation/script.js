const judul = document.getElementsByTagName('h1')[0];

judul.setAttribute('name', 'febrian');

//mengambil attribute yang ada---------------
// judul.getAttribute('id');

//menghapus attribute------------------------
// judul.removeAttribute('id');

//mengelola class----------------------------
const p2  = document.querySelector('.p2');
// p2.classList.add('label');

// p2.classList.remove('label');

//toggle jika tidak ada class label maka tambah jika ada hapus
// p2.classList.toggle('label');

// untuk melihat class yang ada
// p2.classList.item(2);

// untuk melihat class yang ada dengan nama
// p2.classList.contains('p2');

// untuk mengganti class p1 menjadi para1
// p2.classList.replace('p1', 'para1');