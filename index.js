// const isAdult = function(age){
//     return age >= 18;
// }


// const isAdult = function(age){
//     /*if (age >= 18){
//         return 'adult';
//     }else{
//         return 'not adult';
//     }*/             //if/else

//     return age >= 18 ? 'adult' : 'not adult'; // ternarniy
// }

// console.log(isAdult(23));


// const logIsAdult = function(age){
//     const adult = age >= 18 ? 'adult' : 'not adult'; 
//     console.log(adult);
// }

// logIsAdult(23);



// const inputData = function (){
//     const data = prompt ('Enter data: ');
//     console.log(data ? 'Thank you: '+ data: 'not thank you');
// }
// inputData();


// const season = prompt ('Enter season\n 1, 2, 12 -winter\n 3, 4, 5 - spring\n 6, 7, 8 - summer\n 9, 10, 11 - fall');
 
//     switch (season) {
//         case '1':
//         case '2':
//         case '12':
//             console.log('Winter');
//                 break;

//         case '3':
//         case '4':
//         case '5':
//             console.log('Spring');
//                 break;  
                
//         case '6':
//         case '7':
//         case '8':
//             console.log('Summer');
//                 break;
                
//         case '9':
//         case '10':
//         case '11':
//             console.log('Fall');
//                 break;

//         default:
//             console.log('not');
//                 break;
//     }


const sum = function(a,b){
    return a+b;
}

const sub = function(a,b){
    return a-b;
}

const mult = function(a,b){
    return a*b;
}

const div = function(a,b){
    return a*b;
}

const calculate = function(num1=10, num2=2, operator='+'){
    if( isNaN(num1-num2) ){
        return false;
    }
    let f;
    switch (operator) {
        case '+':
            f = sum;
            break;
        case '-':
            f = sub;
            break;
        case '*':
            f = mult;
            break;
        case '/':
            f = div;
            break;
        default:
            return null;
    }
    return(typeof f==='function')?f(num1,num2):f;
}

console.log(calculate());