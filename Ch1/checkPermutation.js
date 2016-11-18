var checkPermutation = function(str1, str2){
  if (str1.length !== str2.length){
  return false;
  }
  var arr1 = str1.split('');
  var arr2 = str2.split('');
  //while there are still items in 2nd array
  for (var i = 0; i < arr1.length; i++){
      var targetIndex = arr2.indexOf(arr1[i]);
      if (targetIndex === -1){
        return false;
      } else {
        arr2.splice(targetIndex, 1);
      }
    }
    return true;
}

console.log("expect true", checkPermutation("abcde", "edcba"));
console.log("expect true", checkPermutation("", ""));
console.log("expect false", checkPermutation("abc", "abcde"))
console.log("expect false ", checkPermutation("abcde", "abc"));
