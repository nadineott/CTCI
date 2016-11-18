var palindromePermutation = function(str){
  var storage = {};
  var oddCount = 0;
  var evenCount = 0;
  var length = 0;
  for (var i = 0; i <str.length; i++){
    var current = str[i];
    if (storage[current] === "odd"){
      storage[current] = "even";
      evenCount++;
      oddCount--;
      length++;
    } else if (storage[current] === "even"){
      storage[current] = "odd";
      evenCount--;
      oddCount++;
      length++;
    } else if (current !== " "){
      storage[current] = "odd";
      oddCount++;
      length++
    }
  }
  if (length%2 === 0){
    if (oddCount > 0){
      return false;
    } return true;
  } else {
    if (oddCount === 1){
      return true;
    } else {
      return false;
    }
  }
}

console.log("expect true", palindromePermutation("tact coa"))
console.log("expect true", palindromePermutation("raacecr"))
console.log("expect false", palindromePermutation("abcde"))
console.log("expect false", palindromePermutation("aaaaab"))
console.log("expect true", palindromePermutation("aaaaabb"))
