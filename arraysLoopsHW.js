//Activity 1

let faveFilms = [
    " Film A ",
    " Film B ",
    " Film C ",
    " Film D ",
    " Film E "
];
console.log(faveFilms);
faveFilms.push (" Film F ");
faveFilms.push (" Film G ");
console.log(faveFilms);

//Activity 2

for (let i = 0; i <6; i++){
console.log(Math.ceil(Math.random() * 50) + 1);
}



//Activity 3

for (let i=9; i >= 0; i--){
    console.log(i);
}

//Activity 4

let films = [
    " James Bond ",
    " Big ",
    " Ghostbusters ",
    " Titanic "
];
console.log (films);
for (let i = 0; i < films.length; i++){
    console.log(films [i]);
}
if (films[2] == " Ghostbusters "){
    console.log ("Yay it's Ghostbusters.")
} else {
    console.log ("Boo!");
}

//Activity 5

for (let i=0 ; i<6; i++){
let ranNum = Math.ceil(Math.random() * 30);
if (ranNum%7 ==0){
console.log(`${ranNum} is divisable by 7`)
} else { 
console.log (`${ranNum} is not divisible by 7`)
    }
}


//Activity 6

let bobfollowers = ["Alex", "Claire", "Dave", "Phil"];
let hannahfollowers = ["Claire", "Steve", "Alex", "Sarah"];
console.log (bobfollowers);
console.log (hannahfollowers);

for (let i=0 ; 1 < bobfollowers.length; i++){
    for (let j = 0; j < hannahfollowers.length; j++){
        if (bobfollowers [i] === hannahfollowers [j]){
            console.log(hannahfollowers[j])
        }
    }  
}