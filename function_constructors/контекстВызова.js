'use strict';

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
        
//         return a + b;
//     }
//     console.log(sum());
    
// }

// showThis(4 , 5);


// const object = {
//     a: 20,
//     b: 30,
//     sum: function () {
//         function shout() {
//             console.log(this);
            
//         }
//         shout();
//     }
// }

// object.sum();



// function User() {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// let ivan = new User('Ivan', 23);


// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + ' ' + surname);
    
    
// }

// const user = {
//     name: 'johan',
//     old: 20
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);


// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));


// 1) обычная функция: this = window,, но если стоит use sctrict то будет undefined
// 2) Контекст у методов объекта - это сам объект 
// 3) this в контрукторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');


btn.addEventListener('click', (e) => { // при обычном написании функции у нас будет выдавать сам контект 
                                            //на котором произошло событие
    e.target.style.backgroundColor = 'red';
    
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
            
        };
        say();
    }
};

obj.sayNumber();



const double = (a) => a * 2;