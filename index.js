
const receivesAFunction = (expression) => {
    expression()
}

function returnsANamedFunction() {
    return function delta(){
        console.log("nothing");
    }
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous");
    }
}