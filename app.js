//  new Game Functions 
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
};
//  Find Servers Functions 

let Serversdiv = document.getElementById('boxFindServers');
// let display = 0;

function findServers() {
    if (display == 1) {
        Serversdiv.style.display = 'block';
        display = 0;
    } else {
        Serversdiv.style.display = 'none';
        display = 1;
    }
}

//  option Functions 

let optiondiv = document.getElementById('boxOption');

function option() {
    if (display == 1) {
        optiondiv.style.display = 'block';
        display = 0;
    } else {
        optiondiv.style.display = 'none';
        display = 1;
    }
}

//  quit Functions 

let quitdiv = document.getElementById('boxQuit');

function quit() {
    if (display == 1) {
        quitdiv.style.display = 'block';
        display = 0;
    } else {
        quitdiv.style.display = 'none';
        display = 1;
    }
}
