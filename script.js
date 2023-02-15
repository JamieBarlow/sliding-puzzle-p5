let source;
let tiles = [];
let cols = 4;
let rows = 4;
let w,h;
let board = [];

function preload() {
    source = loadImage("imgtest-square.jpg");
}

function setup() {
    createCanvas(400, 400);
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
    simpleShuffle(board);
}

function simpleShuffle(arr) {
    for (let i = 0; i < 100; i++) {
        let r1 = floor(random(0, arr.length));
        let r2 = floor(random(0, arr.length));
        swap(r1, r2, arr);
    }
}

function swap(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function draw() {
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
            let index = col + row * cols;
            let x = col * w;
            let y = row * h;
            let tileIndex = board[index];
            let img = tiles[tileIndex].img;
            image(img, x, y, w, h);
        }
    }

    for(let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * w;
            let y = j * h;
            strokeWeight(2);
            noFill();
            rect(x, y, w, h);
        }
    }

    noLoop();
}

