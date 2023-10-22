//1

// function sum(num1, num2){
//     return num1 + num2
// }

// var sum = (num1, num2) => num1 + num2; // Arrow

// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))

//2

// function stringLength(str){
//     console.log(`the length of "${str}" is:`, str.length)
// }

// var stringLength = str => console.log(`the length of "${str}" is:`, str.length);

// let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

// console.log(stringLength(longestCityNameInTheWorld));

//3

// var stringLength = str =>{
//     let length = str.length
//     console.log(`the length of "${str}" is:`, length)
//     return str.length
// }

// stringLength("willynilly")

//4

// let alerts = ["Hey, you are awesome", "You are so wonderful", "What a marvel you are", "You're so lovely", "You're so sweet that I'd think you're a sweet potato -- and I LOOOOVE POTATOES"]

// // function showAlert(name){    
// //     alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)
// // }

// var showAlert = name => alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`)


// showAlert("you ball of fluff")


//5

// function oneTwoThreeRotate(){
//     Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(function(tag){
//         tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
//     })
// }

// var oneTwoThreeRotate = () => Array.prototype.slice.call(document.querySelectorAll('div,p,span,img,a,body')).map(tag =>{
// tag.style['transform'] = 'rotate(' + (Math.floor(Math.random() * 3) - 1) + 'deg)';
// });

// oneTwoThreeRotate();

//6 Write an arrow function that returns the string, Hello, I am ${name}, and I am ${age} years old.

// var nameAge = (name,age)=> {return `Hello, I am ${name}, and I am ${age} years old`};

// console.log(nameAge("Omar",20));

//7




//8
// let eye = "eye";

// const fire =
// (

// ) =
// >
// {
//  return `bulls-`;
// }

// let eye = "eye";

// const fire = () => {return `bulls-${eye}`};
// console.log(fire());


//9

// const fibonacci = n => {
//     if (n < 3) return 1;
//     return fibonacci(n - 1) + fibonacci(n - 2);
//     }


// console.log(fibonacci(2));

arrayNumeros = [2,6,1,8,3,9];
console.log(arrayNumeros.sort()); //Ordena como si fuera string, y no numérico.

