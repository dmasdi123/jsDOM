// const card = document.querySelector('.card');
// const close = document.querySelector('.close');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// })

//DOM traversal
// const close = document.querySelectorAll('.close');
// // for (let i = 0; i < close.length; i++) {
// //     close[i].addEventListener('click', function (e) {
// //         e.target.parentElement.style.display= 'none';
// //     });
// // }

// close.forEach(function(i) {
//     i.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault();
//         //untuk menghentikan bubbling event
//         e.stopPropagation();
//     });
// });

// //event bubbling yaitu ketika event akan terus berjalan sampe selesai bubblenya
// const cards = document.querySelectorAll('.card');
// cards.forEach(function(i) {
//     i.addEventListener('click', function(e) {

//     });
// });

const container = document.querySelector('.container');
container.addEventListener('click', function(e) {
    if (e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
})
