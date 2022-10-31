'use strict'

const pass = document.querySelector('#password');
const submit = document.querySelector('.submit');
const confirms = document.querySelector('.conf')
submit.addEventListener('click', () =>{
    
    if(pass.value.length > 0 && pass.value.length <= 8){
        document.querySelector('.message').textContent = 'Password is weak❗';
    }else if(pass.value.length > 8){

        document.querySelector('.message').textContent = 'STRONG PASSWORD ✅';
        document.querySelector('.message').style.color = 'green'
        document.querySelector('.message').style.marginTop = '10px'


    // }else if(confirms.value === pass.value){
        // document.querySelector('body').style.backgroundColor = 'red'
    } else{
        document.querySelector('.message').textContent = '⛔No password';
        document.querySelector('.confirm').textContent = '⛔No password';
    }

    

})