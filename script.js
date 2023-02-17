let source;
let tiles = [];
let cols = 4;
let rows = 4;
let w,h;
let board = [];
const reshuffle = document.querySelector('#reshuffle');
firstTime = true;

function preload() {
    source = loadImage("imgtest-square.jpg");
}

function setup() {
    createCanvas(400, 400);
    frameRate(10);      // for displaying grid moves
    w = width / cols;   //todo: where is width defined?
    h = height / rows;  //todo: where is height defined?
    
    // chop up source image into tiles
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            let sx = col * w;   // getting coordinates of source
            let sy = row * h;
            let img = createImage(w, h);
            img.copy(source, sx, sy, w, h, 0, 0, w, h)  // see also ctx.drawImage()
            // Keeping track of the index of each tile in the board array
            let index = col + row * cols;   // why?
            board.push(index);
            // creating an actual Tile and putting this in the tiles array
            let tile = new Tile(index, img);
            tiles.push(tile);
        }
    }
    // Creating blank tile
    tiles.pop();
    board.pop();
    board.push(-1);

    // randomMove(board);
    // setTimeout(stopShuffling, 5000);
}

function mousePressed() {
    let col = floor(mouseX / w);
    let row = floor(mouseY / h);
    // console.log(col, row);
    move(col,row,board);
}


function draw() {
    if (firstTime === true) {
        randomMove(board);    // comment out to remove shuffling - for testing
    }  
    setTimeout(stopShuffling, 5000);
    background(0);
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            let index = col + row * cols;
            let x = col * w;
            let y = row * h;
            let tileIndex = board[index];
            if (tileIndex > -1) {               // running for all tiles except the blank. Increase the value here to create more blank tiles
                let img = tiles[tileIndex].img;
                image(img, x, y, w, h);
            }
        }
    }
    // drawing gridlines
    for(let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * w;
            let y = j * h;
            strokeWeight(2);
            noFill();
            rect(x, y, w, h);
        }
    }
    console.log(tiles[0].img);
   
    // noLoop();
}

function stopShuffling() {
    firstTime = false;
    // noLoop();
}

// Reshuffle on keypress
window.addEventListener('keydown', function(e) {    
    e.key === 'r' ? loop() : false;
    setTimeout(stopShuffling, 5000);                    // Stop shuffling after set time
})

// Reshuffle on button press
reshuffle.addEventListener('click', function() {
    loop();
    setTimeout(stopShuffling, 5000);
})

function move(i, j, arr) {
    let blank = findBlank();
    let blankCol = blank % cols;    // col no's start at 0 so modulo used to find remainder
    let blankRow = floor(blank / rows);
    if (isNeighbor(i,j,blankCol,blankRow)) {
        swap(blank, i + j * cols, arr)
    }
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[i];
    arr[j] = temp;
}

function isNeighbor(i,j,x,y) {
    if (i !== x && j !== y) {    // if tiles compared are not in the same column or row, can't be neighbours
        return false;
    }
    if (abs(i-x) == 1 || abs(j-y) == 1) {   // if tiles compared are 1 row or column apart (and also in the same row or column, as per above)
        return true;
    }
    return false;
}

function findBlank() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] == -1) return i;        // gives index of blank tile
    }
}

function randomMove(arr) {
    for (let i = 0; i < 10; i++) {   // higher value = more randomised
        let r1 = floor(random(cols));
        let r2 = floor(random(rows));
        move(r1, r2, arr);
    }
}