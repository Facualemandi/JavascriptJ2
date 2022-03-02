const d = document;

d.addEventListener('DOMContentLoaded', (e)=>{
    calculateTip('#tip5','#tip10', '#tip15','#tip25','#tip50','#reset')
})

const bill = document.getElementById('bill');
const tip5 = document.getElementById('tip5');
const tip10 = document.getElementById('tip10');
const tip15 = document.getElementById('tip15');
const tip25 = document.getElementById('tip25');
const tip50 = document.getElementById('tip50');
const reset = document.getElementById('reset');
const inpPeople = document.getElementById('inpPeople');
const customTips = document.getElementById('custom');


// Function that runs the entire page //
function calculateTip(tip5,tip10,tip15,tip25,tip50,reset){
    const d = document;
    d.addEventListener('click', (e) =>{


   // Function that calls the error
         function showError(){
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
             }
         }

// ------------------------------------------------------------------------------//


         if(e.target.matches(tip5)){
             
 //Function that is executed if the fields are empty //
             if(bill.value === ""  || inpPeople.value === ""){
                 showError()
// --------------------------------------------------------------------//


 //Function that is executed if the fields are empty //
             }if(bill.value && inpPeople.value){
                let resultado = (bill.value * 5) / 100;
                     let resultado2 = resultado;
                     let  a = parseInt(resultado); // 500
                     let  b = parseInt(resultado2) / inpPeople.value; // 500 + 25 = 525
        
                     document.querySelector('.textDiv').innerHTML = a + ',00';
                     document.querySelector('.secondTextDiv').innerHTML = b + ',00';

             }
           }if(e.target.matches(tip10)){ 
               
// Function that is executed if the fields are empty //
               if(bill.value === ""  || inpPeople.value === ""){
                showError()      
// --------------------------------------------------------------------//

             }if(bill.value && inpPeople.value){
                let resultado = (bill.value * 10) / 100;
                     let resultado2 = resultado;
                     let  a = parseInt(resultado); // 500
                     let  b = parseInt(resultado2) / inpPeople.value; // 500 + 25 = 525
        
                     document.querySelector('.textDiv').innerHTML = a + ',00';
                     document.querySelector('.secondTextDiv').innerHTML = b + ',00';
           }


         }if(e.target.matches(tip15)){
             
//Function that is executed if the fields are empty //
             if(bill.value === ""  || inpPeople.value === ""){
                showError()      
// ------------------------------------------------------------------//

            }if(bill.value && inpPeople.value){
               let resultado = (bill.value * 15) / 100;
                    let resultado2 = resultado;
                    let  a = parseInt(resultado); // 500
                    let  b = parseInt(resultado2) / inpPeople.value; // 500 + 25 = 525
       
                    document.querySelector('.textDiv').innerHTML = a + ',00';
                    document.querySelector('.secondTextDiv').innerHTML = b + ',00';
          }
                 }if(e.target.matches(tip25)){

 // Function that is executed if the fields are empty //
          if(bill.value === ""  || inpPeople.value === ""){
             showError() 
// ------------------------------------------------------------------//

        }if(bill.value && inpPeople.value){
           let resultado = (bill.value * 25) / 100;
                let resultado2 = resultado;
                let  a = parseInt(resultado); // 500
                let  b = parseInt(resultado2) / inpPeople.value; // 500 + 25 = 525
   
                document.querySelector('.textDiv').innerHTML = a + ',00';
                document.querySelector('.secondTextDiv').innerHTML = b + ',00';
      }
       }if(e.target.matches(tip50)){

 // Function that is executed if the fields are empty //
           if(bill.value === ""  || inpPeople.value === ""){
                showError()
// ------------------------------------------------------------------//

       }if(bill.value && inpPeople.value){
               let resultado = (bill.value * 50) / 100;
               let resultado2 = resultado;
               let  a = parseInt(resultado); // 500
               let  b = parseInt(resultado2) / inpPeople.value; // 500 + 25 = 525

               document.querySelector('.textDiv').innerHTML = a + ',00';
               document.querySelector('.secondTextDiv').innerHTML = b + ',00';

          }
         } if(e.target.matches(reset)){
              bill.value = 0;
               inpPeople.value = 0;
                document.getElementById('div1').innerHTML = '$0,00';
                 document.getElementById('div2').innerHTML = '$0,00';
            

        }

    })

    customTips.addEventListener('keyup', (e) => {
            if(bill.value === "" ){
                const billError = document.getElementById('billError');
   
                billError.style.display = "block";            
                bill.style.border = '1px solid red'
   
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
               }
            

       
          const customTips = e.target.value;
          
          const f = parseInt(customTips) 
          const g = parseInt(inpPeople.value) 

          
          const tipResult = (bill.value * f) / 100; 

          let  a = parseInt(tipResult); 
          let  b = parseInt(tipResult / g);
          


          document.querySelector('.textDiv').innerHTML = tipResult + ',00';
          document.querySelector('.secondTextDiv').innerHTML = b + ',00';
       
    })

            
}


























// bill.addEventListener('keyup', (e) =>{
//     let inputBill = e.path[0].value
//     document.querySelector('.textDiv').innerHTML = inputBill;
// })