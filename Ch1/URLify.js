var URLify = function(str){
  var arr = str.split(" ");
  var str2 = arr.join("%20")
  return str2;
  //split string by spaces
  //join array with %20
  //return joined array
}

console.log("expect Ms%20Nadine%20Ott ", URLify("Ms Nadine Ott"))
console.log("expect Hello%20There", URLify("Hello there"))
console.log("expect %20", URLify(" "))
console.log("expect ", URLify(""))
