// function recievesAFunction(){
//     return function thing(){}
// }
// recievesAFunction(() => {
//     console.log('Hello')
// }, 100)
function receivesAFunction(thing){
    thing()
}

function returnsANamedFunction(){
    return function name(){}
}
function returnsAnAnonymousFunction(thing){
    return (function () {return thing})
}