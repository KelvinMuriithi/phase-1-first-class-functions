const sayHi = function(){
    console.log("Hi")
}

const receivesAFunction = (sayHi) => sayHi()

const returnsANamedFunction=()=>sayHi

const returnsAnAnonymousFunction = () => (function(){
    return "Hello"
})