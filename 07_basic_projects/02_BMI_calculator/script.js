const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#result');

    if(height<=0 || isNaN(height) || weight<=0 || isNaN(weight))
        result.innerHTML="give correct value"
    else {
        const bmi=(weight*10000/(height*height)).toFixed(2);
        if(bmi<18.6) result.innerHTML=`Your BMI = ${bmi}, you are underweight`
        else if(bmi>24.9) result.innerHTML=`Your BMI = ${bmi}, you are overweight`
        else result.innerHTML=`Your BMI = ${bmi}, you are normal`
    }
})