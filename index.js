// Code your solutions in this file
function writeCards () {
  let message = []
  const names =['Guadalupe','Ollie','Aki'];
  for (let i = 0; i < names.length; i++) {
    console.log (message.push (`Thank you, ${names[i]}, for the wonderful surprise gift!`));
    debugger;

}
return message;
}
writeCards(names);

function countDown() {
  let i = 0;
  while( i < 11) {
    console.log(i ++);
    debugger;
  }
}