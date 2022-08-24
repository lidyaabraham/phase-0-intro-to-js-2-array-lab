// Write your solution here!


const cats = ["Milo","Otis","Garfield"]


function destructivelyAppendCat(name){
    return cats.push(name);    
}

// destructivelyAppendCat('Ralph');
// console.log(cats);

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

// destructivelyPrependCat('Bob');
// console.log(cats)

function destructivelyRemoveLastCat(name){
    return cats.pop(name)
}
// destructivelyRemoveLastCat('Ralph')
// console.log(cats)

function destructivelyRemoveFirstCat(name){
    return cats.shift(name)
}
// destructivelyRemoveFirstCat('Bob')
// console.log(cats);

function appendCat(name){
    let newCats = [...cats, name];
    return newCats;
    // console.log(newCats);
}
appendCat('Broom');
console.log(cats);

// console.log(appendCat('Broom'));

function prependCat(name){
    let newCats = [name, ...cats];
    return newCats;

    console.log(newCats);
}
// prependCat('Arnold')

function removeLastCat(){
    let newCats=cats.slice(0,2);
    return newCats;

    console.log(newCats);
}
// removeLastCat()

function removeFirstCat(){
    let newCats=cats.slice(1)
    return newCats;

    console.log(newCats)
}
// removeFirstCat()
