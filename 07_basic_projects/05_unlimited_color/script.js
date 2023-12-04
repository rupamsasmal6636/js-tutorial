const start=document.querySelector('#start')
const end=document.querySelector('#stop')

let intervalId;
let generateColor=()=> {
    let color='#'
    const hex="0123456789ABCDEF"
    for(let i=0;i<6;i++){
        let randomNum=Math.floor(Math.random()*16)
        color+= hex[randomNum]
    }
    console.log(color);
    return color;
}
function changeColor() {
    document.querySelector('body').style.backgroundColor=generateColor();
    console.log();
}
function startColorChange() {
    intervalId=setInterval(changeColor,1000)
}
function stopColorChange() {
    clearInterval(intervalId)
    intervalId=null
}
start.addEventListener('click',startColorChange)
end.addEventListener('click',stopColorChange)