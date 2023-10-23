let div = document.getElementById('boxNewGame');
let display = 0;

function newGmae() {
    if (display == 1) {
        div.style.display = 'block';
        display = 0;
    } else {
        div.style.display = 'none';
        display = 1;
    }
}