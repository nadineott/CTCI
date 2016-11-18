var rotateMatrix = function(arr){
  var rows = arr.length;
  var columns = arr[0].length;
  var answer = [];
  for (var i = 0; i < columns; i++){
    var newRow = [];
    for (var j = rows-1; j >=0; j--){
      newRow.push(arr[j][i]);
    }
    answer.push(newRow);
  }
  return answer;
}

console.log("expect [[7,4,1],[8,5,2],[9,6,3]]", rotateMatrix([[1,2,3],[4,5,6],[7,8,9]]))
