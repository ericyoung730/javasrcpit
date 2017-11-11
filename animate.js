var countdownnumber=20;
var countdownid,h,m,s,demo;

function initial(){ 
   
  h=Math.floor((countdownnumber % (60 * 60 * 24)) / (60 * 60));
   
  m=Math.floor((countdownnumber % ( 60 * 60)) / (60));
  
  s=Math.floor((countdownnumber % 60));
  demo=document.getElementById("demo");
  demo.innerHTML =  h + "h "+ m + "m " + s + "s ";
  countdownnumber--;
  countdownid=window.setInterval(countdownfunc,1000);
}
function countdownfunc(){ 
 h=Math.floor((countdownnumber % (60 * 60 * 24)) / (60 * 60));
   
  m=Math.floor((countdownnumber % ( 60 * 60)) / (60));
  
  s=Math.floor((countdownnumber % 60));
   demo.innerHTML =  h + "h " + m + "m " + s + "s ";
  if (countdownnumber==0){
    alert("倒數結束");
     myFunction();
    clearInterval(countdownid);
  }
  countdownnumber--;
}
function myFunction() {
    document.getElementById("myForm").submit();
}
