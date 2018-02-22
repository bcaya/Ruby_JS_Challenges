var outputs = document.getElementById('inputter') // this is variable that will output the combos 

function possibleCombos(){ 
  var inputs = document.getElementById("input").value; //stores value that is received after event listener is clicked(submit) button
  var strings = new Array(); //second array that is used to get each combination 
for (index = 0; index < inputs.length; index++) {  
  for (index2 = index + 1; index2 < inputs.length+1; index2++) {
   strings.push(inputs.slice(index,index2)); //nested for loop that is always one ahead so it is going through each one and is getting the combinations
   debugger 
  }
}

inputter.innerHTML= strings; //outputs the new array of combinations
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', possibleCombos, false);  //starts the possibleCombos funciton 