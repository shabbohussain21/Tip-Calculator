	const bill = document.querySelector('#bill');
	const tip  = document.querySelector('#tip');
	const people = document.querySelector('#people');
    
  const tip_Decrease = document.querySelector('#tip_decrease');
	const tip_Increase = document.querySelector('#tip_increase'); 
	const people_Decrease = document.querySelector('#people_decrease');
	const people_Increase = document.querySelector('#people_increase');


  const billValue = document.querySelector("#billValue");
	const tipValue = document.querySelector("#tipValue");
	const total = document.querySelector("#total");
	const personBill=document.querySelector('#personBill');

 let i = 15;
 let j=1;
/////////////////////////////////////
	  const clear = document.querySelector('#clear').addEventListener('click', function(){
       tipValue.textContent ='$0.00';
       billValue.textContent='$0.00';
       total.textContent = '$0.00';
       personBill.textContent = '$0.00';
       bill.value= '';
       tip.value='15';
       people.value='1';
   });
// //////////////////////////////////////

 $(function () {
       $( "#people" ).change(function() {
          var min = parseInt($(this).attr('min'));
         if ($(this).val() < min)
          {
              $(this).val(min);
          }       
        }); 
    });

////////////////////////////////////
const callback = async function asyncCall() {
  // console.log('calling');
  const result = await calc();
  // console.log(result);
  // expected output: "resolved"
}
const calc = function(){ 

	// alert("Hello");
  
	  const bill_val = Number(bill.value);
	  const tip_val =  Number(tip.value);
	  const people_val = Number(people.value);
	  console.log(tip_val);

	  // console.log(bill_val ,tip_val, people_val );
      billValue.textContent = `$${bill_val}`;

      // tip
	  const finalTip = (bill_val*tip_val)/100;
      tipValue.textContent = `$${finalTip}`;
 
      // total bill amuont
      const TotalBillAmout = bill_val+finalTip;
      total.textContent = `$${TotalBillAmout}`;
      // per person bill amount
      
      if(people_val>0){
      const perPersonBillAmount = (TotalBillAmout/people_val);
       personBill.textContent= `$${parseFloat(perPersonBillAmount).toFixed(2)}`;
       }else{
       	personBill.textContent= `$${parseFloat(TotalBillAmout).toFixed(2)}`;
       	       }
       // (Math.round(num * 100) / 100).toFixed(2); just for refence
     

 };

bill.addEventListener('keyup', callback);
tip.addEventListener('keyup',callback);
people.addEventListener('keyup',callback);

tip_Increase.addEventListener('click',function(){
  
        tip.value = ++i;
       callback();
 
});
tip_Decrease.addEventListener('click',function(){
      if(tip.value>1){
        tip.value = --i;
       callback();
     }
});
people_Decrease.addEventListener('click',function(){
	 if(people.value>1){
       people.value = --j;
       callback();
     }
});
people_Increase.addEventListener('click',function(){
       
        people.value = ++j;
        callback();
});



bill.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {  //checks whether the pressed key is "Enter"
         callback();
    }
});








