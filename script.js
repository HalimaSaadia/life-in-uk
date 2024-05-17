$(document).ready(function () {
  let currentNumber = 0;
  const targetNumber = 20;

setTimeout(()=>{
    setInterval(() => {
        {
          $("#counter").text(currentNumber);
          if(currentNumber < targetNumber){
              currentNumber++;
          }
        
        }
      }, 50);
},700)
});
