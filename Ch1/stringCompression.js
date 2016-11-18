
var stringCompression = function(str){
  var count = 1;
  var answer = "";
  for (var i = 0; i < str.length; i++){
    if (str[i] === str[i+1]){
      count++;
    } else {
    answer+=str[i]+count;
    count = 1;
    }
  }
  if (str.length < answer.length){
    return str;
  }
  return answer;
}

console.log("expect abc ", stringCompression("abc"));
console.log("expect n3a3d3i3n3e3", stringCompression("nnnaaadddiiinnneee"));
