//USING OBJECT AS ADDITIONAL DATA STRUCTURE
var isUnique = function(str){
  var storage = {};
  for (var i = 0; i < str.length; i++){
    if (storage[str[i]]){
      return false;
    } else {
      storage[str[i]] = 1;
    }
  }
  return true;
}
//WITHOUT USING OBJECT AS ADDITIONAL DATA STRUCTURE
var isUnique = function(str){
  var arr = str.split('');
  for (var i = arr.length-1; i >=0; i--){
    if (arr.indexOf(arr[i]) !== i){
      return false;
    }
  }
  return true;
}

console.log("expect false ", isUnique("aba"))
console.log("expect true ", isUnique("abc"))
console.log("expect true ", isUnique(""))
console.log("expect false ", isUnique("abc10k!b"))
