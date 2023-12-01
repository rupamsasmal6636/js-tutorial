// const clock=document.querySelector('#clock')
const clock=document.getElementById('clock')

// setInterval(function,timeInMiliSecondToReload) is used to run inside function after the given delay
setInterval(function name(params) {
    let date= new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerText=date.toLocaleTimeString();
},1000)