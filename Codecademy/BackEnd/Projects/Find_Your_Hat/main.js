//The code that solves the challenge is commented out waaaay down there. The code at the start is just me having fun and challenging myself more.
const prompt = require('prompt-sync')({ sigint: true });
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let play = 'y';
let x, y, key, skip;
x = y = key = skip = 0;
let array_size = 0;
let x_axis = 0;
let y_axis = 0;
let array = [];

function run_game() {    
    while (play == 'y' || play == 'Y') {
        //console.clear();
        //reset_game();
        array_size = prompt("Choose the array size e.g(3x3): ");
        //whale();
        x_axis = parseInt(array_size[0]);
        y_axis = parseInt(array_size[2]);
        array = create_array(x_axis, y_axis);
        key = x = y = 0;
        print_field();
        console.log("How to play:\n          8(up)\n4(Left) | 5(down) | 6(right)\n\nq (quit)");
        direction();
    }
    process.exit(0);
}

function reset_game() {
    for (let i = 0; i < newFieldBackup.field_backup.length; i++) {
        for (let j = 0; j < newFieldBackup.field_backup[i].length; j++) {
            array[i][j] = newFieldBackup.field_backup[i][j];
        }
    }
}

function print_field() {
    let i, j;
    i = j = 0;
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array[i].length; j++) {
            process.stdout.write(array[i][j]);
        }
        process.stdout.write('\n');
    }
}

function check_position() {
    let x_limit, y_limit;
    x_limit = array.length;
    y_limit = array[0].length;

    console.clear();
    //Out of bounds
    if (x < 0 || y < 0 || x > x_limit - 1 || y > y_limit - 1) {
        print_field();
        console.log("Can't go there, sorry.");
        skip = 1;
        return false;
    }
    //Hole
    else if (array[x][y] == hole) {
        console.log("You Lose.");
        play_again();
    }
    //Hat yay o/
    else if (array[x][y] == hat) {
        console.log("You Win!");
        play_again();
    }
    else {
        return true;
    }
}

function play_again() {
    play = prompt("Play Again? y/n?");
    if (play == 'y' || play == 'Y') { key = 1; }
    else { process.exit(0); }
}

function direction() {
    while (key != 1) {
        skip = 0;
        key = prompt('');
        //Left
        if (key == 4) {
            y--;
            if (check_position()) { array[x][y + 1] = fieldCharacter; }
            else { y++; }
        }
        //Right
        if (key == 6) {
            y++;
            if (check_position()) { array[x][y - 1] = fieldCharacter; }
            else { y--; }
        }
        //Down
        if (key == 5) {
            x++;
            if (check_position()) { array[x - 1][y] = fieldCharacter; }
            else { x--; }
        }
        //Up
        if (key == 8) {
            x--;
            if (check_position()) { array[x + 1][y] = fieldCharacter; }
            else { x++; }
        }
        //Stop
        if (key == 'q') {
            process.exit(0);
        }
        //Prints when out of bounds
        if (skip != 1) {
            array[x][y] = pathCharacter;
            console.clear();
            print_field();
        }
        if (key != 4 && key != 5 && key != 6 && key != 8 && key != 'q') {
            console.clear();
            print_field();
            console.log("Invalid Key. Use \n          8(up)\n4(Left) | 5(down) | 6(right)\n\nq (quit)");
        }

    }
}

function whale() {
    console.log("Arrays can't have single columns or lines and must have a minimum area of 9(3x3)\nChoose the array size e.g(3x3): ")
    while (x_axis * y_axis < 9 || x_axis < 2 || y_axis < 2) {
        array_size = prompt();
        x_axis = parseInt(array_size[0]);
        y_axis = parseInt(array_size[2]);
    }
}

function create_array(x, y) {
    let hat_counter = 1;
    let array = [];
    let field_size = x * y;
    let hole_counter, fieldCharacter_counter, longest_axis, bingo, max, a, b, c, d;
    hole_counter = fieldCharacter_counter = longest_axis = bingo = 0;
    max = 4; a = 0; b = 1; c = 2; d = 3;

    x < y ? longest_axis = 'y' : longest_axis = 'x';
    hole_counter = (field_size) * (0.3);
    hole_counter = Math.floor(hole_counter);
    fieldCharacter_counter = field_size - 1 - hole_counter;

    console.log('FieldSize:', field_size, 'hole_counter: ', hole_counter, "fieldCharacter_counter: ", fieldCharacter_counter)

    for (let i = 0; i < y; i++) {
        array.push([]);
        if (i === 0) { array[0].push('*'); }
        for (let j = 0; j < x; j++) {
            bingo = Math.floor(Math.random() * max)
            //print hat
            if (longest_axis === 'y' && bingo === a) {
                if (j > Math.floor(x / 2) && hat_counter != 0) { array[i].push(hat); hat_counter = 0; }
            }
            if (longest_axis === 'x' && bingo === a) {
                if (i > Math.floor(y / 2) && hat_counter != 0) { array[i].push(hat); hat_counter = 0; }
            }
            //print field
            if (fieldCharacter_counter != 0) {
                if (bingo === b || bingo === c) { array[i].push(fieldCharacter); fieldCharacter_counter--; }
            }
            //print hole
            if (hole_counter != 0 && bingo === d) { array[i].push(hole); hole_counter--; }
        }
    }
    console.log(array);
    return array;
}

run_game();

// Challenge Solution
/*
const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let play = '';
let x, y, key, skip;
x = y = key = skip = 0;

class Field {
constructor(field) {
    this._field = field;
}

run_game() {
play = prompt("Play? y/n?");
while (play == 'y' || play == 'Y') {
key = x = y = 0;
console.clear();
    this.print_field();
console.log("How to play:\n          8(up)\n4(Left) | 5(down) | 6(right)\n\nq (quit)");
    this.direction();
}
process.exit(0);
}

print_field() {
let i, j;
i = j = 0;
    for (i = 0; i < this._field.length; i++) {
        for (j = 0; j < this._field[i].length; j++) {
            process.stdout.write(this._field[i][j]);
}
process.stdout.write('\n');
}
}

check_position() {
let x_limit, y_limit;
    x_limit = this._field.length;
    y_limit = this._field[0].length;

console.clear();
//Out of bounds
if (x < 0 || y < 0 || x > x_limit - 1 || y > y_limit - 1) {
    this.print_field();
console.log("Can't go there, sorry.");
skip = 1;
return false;
}
//Hole
else if (this._field[x][y] == hole) {
console.log("You Lose.");
    this._field[x][y] = hole;
    this.play_again();
}
//Hat yay o/
else if (this._field[x][y] == hat) {
console.log("You Win!");
    this._field[x][y] = hat;
    this.play_again();
}
else {
return true;
}        
}

play_again() {
play = prompt("Play Again? y/n?");
if (play == 'y' || play == 'Y') { key = 1; }
else { process.exit(0); }
}

direction() {
while (key != 1) {
skip = 0;
key = prompt('');
//Left
if (key == 4) {
y--;
    if (this.check_position()) { this._field[x][y + 1] = fieldCharacter; }
else { y++; }
}
//Right
if (key == 6) {
y++;
    if (this.check_position()) { this._field[x][y - 1] = fieldCharacter; }
else { y--; }
}
//Down
if (key == 5) {
x++;
    if (this.check_position()) { this._field[x - 1][y] = fieldCharacter; }
else { x--; }
}
//Up
if (key == 8) {
x--;
    if (this.check_position()) { this._field[x + 1][y] = fieldCharacter; }
else { x++; }
}
//Stop
if (key == 'q') {
process.exit(0);
}
//Prints when out of bounds
if (skip != 1) {
    this._field[x][y] = pathCharacter;
console.clear();
    this.print_field();
}
if (key != 4 && key != 5 && key != 6 && key != 8 && key != 'q') {
console.clear();
    this.print_field();
console.log("Invalid Key. Use \n          8(up)\n4(Left) | 5(down) | 6(right)\n\nq (quit)");
}
}
}
}

const newField = new Field([
['*', 'O', '░', '░', '░'],
['░', 'O', '░', 'O', '░'],
['░', 'O', '░', 'O', '░'],
['░', 'O', '░', 'O', '░'],
['░', '░', '░', 'O', '^'],
]);
newField.run_game();
*/