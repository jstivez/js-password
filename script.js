const char = 'qwertyuiopasdfghjklzxcvbnm1234567890!@#$%^&*()'
var prom = window.prompt("enter password length")
let result = '';{
for (let i = 1; 1 <= prom; i++){
  const rand = Math.floor(Math.random() * 45 + 1)
  let b = (char.substring(rand, rand +1))
  result += b;
}
function myFunc(){
document.getElementById('password').innerHTML = result;
}
}