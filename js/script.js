// JavaScript File
var k = Number(prompt('Please enter index for Fibonacci numbers', 10));
var d = String(prompt('Please enter direction for Fibonacci numbers (- or +)', '+'));
var x = 0;
if (d=='+'){
 while (x<=k) {
  if (x < 2) {
   var f0 = 0;
   console.log('F'+x+'='+f0)
   x = x + 1;
   var f1 = 1;
   console.log('F'+x+'='+f1)
   x = x + 1;
  } 
  var f2 = f1 +f0;
  console.log('F'+x+'='+f2)
  x = x + 1;
  f0 = f1; 
  f1 = f2;
 }
 x = x - 1;
 alert('F'+x+'='+f1);
} 
if (d=='-') {
 while (x>=-k) {
  if (x > -2) {
   var f0 = 0;
   console.log('F'+x+'='+f0)
   x = x - 1;
   var f1 = 1;
   console.log('F'+x+'='+f1)
   x = x - 1;
  } 
  var f2 = f0 - f1;
  console.log('F'+x+'='+f2)
  x = x - 1;
  f0 = f1; 
  f1 = f2;
 }
  x = x + 1;
 alert('F'+x+'='+f1);
}