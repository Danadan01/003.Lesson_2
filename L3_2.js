let num = 57683;
  let stringNum = num.toString();
  let array = stringNum.split("");
  let arrayString = array.toString();
  let newStr = arrayString.replaceAll(",", " ");
  console.log(newStr);
 
