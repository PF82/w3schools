// foreach() method

const fruits = ["apple", "orange", "cherry"];

let text = "";
fruits.forEach(myFunction);
function myFunction(item, index) {
    text += index + ": " + item + "<br>";
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
document.getElementById("demo1").innerHTML = text;
console.log(text)

// or

let text1 = "";
fruits.forEach((item, index) => text1 += index + ": " + item + "<br>")
document.getElementById("demo2").innerHTML = text1;
console.log(text1)

// ---

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element))

// or

array1.forEach(myFunction1);
function myFunction1(element){
    return console.log(element)
}

