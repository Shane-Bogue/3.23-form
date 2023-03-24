console.log('Select input element presents options for the users from which they need to select one of them')
console.log('Datalist input element presents a list of suggested values to the form and they are free to select one of the values or type in their own value')
console.log('The fieldset element is used to group related form controls and thier labels within a web form ')
console.log('YOu can seperate the two with fieldsets ')
console.log('You cannot change the value')
console.log('high,low,mac,min,optimum,value')

function doAdd() {
    let numOne = document.getElementById('num1').value;
    let numTwo = document.getElementById('num2').value;
    let theProduct = parseInt(numOne) + parseInt(numTwo);
    document.getElementById('add').textContent = theProduct
  }

  function doMult() {
    let numOne = document.getElementById('num3').value;
    let numTwo = document.getElementById('num4').value;
    let theProduct = parseInt(numOne) * parseInt(numTwo);
    document.getElementById('mult').textContent = theProduct
  }
