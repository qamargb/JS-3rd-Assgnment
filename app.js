for (var i = 1; i <= 10; i++) {
  console.log(i);
}


for (var i = 10; i >= 1; i--) {
  console.log(i);
}


for (var i = 1; i <= 10; i++) {
  console.log("Hello JacaScript!");
}


var fruits = ["Apple", "Banana", "Mango", 'Orange'];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


var marks = [50, 60, 70, 80];
var total = 0;

for (var i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
console.log("Total Marks =", total);






var marks = [50, 60, 70, 80];
var total = 0;

for (var i = 0; i < marks.length; i++) {
  total = total + marks[i];
}
var average = total / marks.length;

console.log("Average Marks =", average);





var colors = ["Red", "Green", "Blue", "Yellow"];

for (let i = colors.length - 1; i >= 0; i--) {
    console.log(colors[i]);
}






var numbers = [5, 10, 15, 20];

for (let i = 0; i < numbers.length; i++) {
    console.log("Index:", i, "Value:", numbers[i]);
}











var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

var count = 0;

for (let i = 0; i < cities.length; i++) {
    count++;
}

console.log("Total Cities =", count);









var numbers = [2, 5, 8, 11, 14, 17, 20];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}