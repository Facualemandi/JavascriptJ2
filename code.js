const d = document;

d.addEventListener('DOMContentLoaded', (e)=>{
    calculateTip('#tip5')
})

const bill = document.getElementById('bill');
const tip5 = document.getElementById('tip5');
const inpPeople = document.getElementById('inpPeople')

function calculateTip(tip5){
    const d = document;
    d.addEventListener('click', (e) =>{
        if(e.target.matches(tip5)){
           if(bill.value === "" ){
               const billError = document.getElementById('billError');

               billError.style.display = "block";            
               bill.style.border = '1px solid red'
               inpPeople.style.border = "1px solid red"

             const time =  setTimeout(()=>{
                billError.style.display = "none";
                bill.style.border = 'none';
                inpPeople.style.border = 'none'
                clearTimeout(time)
                
            },850);

           }if(inpPeople.value === ""){
            const peopleError = document.querySelector('.peopleError');
            peopleError.style.display = "block";
            inpPeople.style.border = "1px solid red";

            const twoTime =  setTimeout(()=>{
                inpPeople.style.border = 'none'
                peopleError.style.display = "none"
                clearTimeout(twoTime)
                
            },850);
           }if(bill.value && inpPeople.value){
               let resultado = (bill.value * 5) / 100;
               let resultado2 = resultado;
             let  a = parseInt(resultado); // 500
             let  b = parseInt(resultado2) / inpPeople.value; // 500 + 25 = 525

               document.querySelector('.textDiv').innerHTML = a + ',00';
               document.querySelector('.secondTextDiv').innerHTML = b + ',00';

               

            
             
           }

        }
    })

}

// bill.addEventListener('keyup', (e) =>{
//     let inputBill = e.path[0].value
//     document.querySelector('.textDiv').innerHTML = inputBill;
// })