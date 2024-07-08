// const text='Hello world hello'
// const regex=/Hello/gi
// console.log(text.match(regex))

// const text='Hello'
// const regex=/w+/gi
// console.log(regex.test(text))

// const numbers='Arahis12345'
// function regex() {
//     const num=/[0-9]/g
//     if (numbers.length>=10) {
//         console.log(numbers.match(num));
//     }  
// }
// regex()

// const email='arahis@gmail.com'
// const regex=/\w+@+\w+\.+\w+/g
// console.log(regex.test(email));

const tel=prompt('Телефон')
function regex() {
    const regen=/\+996+[0-9]/g
    if (tel.length===13) {
        return regen.test(tel)
    }
    else{
        return false
    }
}
console.log(regex());