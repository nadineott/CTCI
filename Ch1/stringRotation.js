var stringRotation = function(str1, str2){
  //go through all instances of first letter of str1 in str2, rotating str2 at each point and directly comparing the strings
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  var first = str1[0];
  var occurances = [];
  while (arr2.indexOf(first) !== -1){
    occurances.push(arr2.indexOf(first) + occurances.length);
    arr2.splice(arr2.indexOf(first), 1);
  }
  for (var i = 0; i < occurances.length; i++){
    arr2 = str2.split('');
    var rotateOption = rotate(arr2, occurances[i]);
    var matches = 0;
    for (var j = 0; j < str1.length; j++){
       if (arr1[j] !== rotateOption[j]){
        matches = 0;
        break;
       } else {
        matches++;
       }
       if(matches === str1.length){
        return true;
       }
    }
  }
  return false;
 }

 var rotate = function(arr, breakPoint){
    var second = arr.splice(breakPoint);
    return second.concat(arr);
 }

 console.log("expect true ", stringRotation("nadine", "dinena"))
