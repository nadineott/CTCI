var oneAway = function(str1, str2){
  var count = 0;
  if (str1.length === str2.length){
    for (var i = 0; i < str1.length; i++){
      if (count > 1){
      return false;
      }
      if (str1[i] !== str2[i]){
        count++;
      }
    }
  } else {
    if (Math.abs(str1.length - str2.length) > 1){
      return false;
    }
    var long;
    var short;
    if (str1.length > str2.length){
      long = str1.split('');
      short = str2.split('');
    } else {
      long = str2;
      short = str1;
    }
    for (var j = 0; j < short.length; j++){
      if (count > 1){
        return false;
      }
      if (short[j] !== long[j]){
        long.splice(j, 1);
        j--;
        count++;
      }
    }
  }
  if (count < 2){
  return true;
  } return false;
}

console.log("expect true", oneAway("nadine", "nadinee"))
console.log("expect true", oneAway("nadine", "nadin"))
console.log("expect true", oneAway("nadine", "naXine"))
console.log("expect true ", oneAway("nadine", "nadine"))


console.log("expect false", oneAway("nadine", "nadinexy"))
console.log("expect false", oneAway("nadine", "nadi"))
console.log("expect false", oneAway("nadine", "nabin"))
console.log("expect false", oneAway("nadine", "nadein"))
