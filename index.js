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


const logIsAdult = function(age){
    const adult = age >= 18 ? 'adult' : 'not adult'; 
    console.log(adult);
}

logIsAdult(23);