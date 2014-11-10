var bubbleSort = function(array){
  if(array == []){
    return [];
  }else {
    for (i=0, len = array.length-1; i<len; i++){
      for(j=0, len2 = array.length-2; j<len-i; j++){
        if(array[j]>array[j+1]){
          temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
        }
      }
    }
  }
  return array;
};

var mergeSort = function(array) {
  if(array.length <= 1){
    return array;
  }
  else if(array.length = 2){
    leftSort = mergeSort(div(array)[0]);
    rightSort = mergeSort(div(array)[1]);
    merge(leftSort, rightSort)
  }
  else{
    leftSort = mergeSort(div(array)[0]);
    rightSort = mergeSort(div(array)[1]);
  }
};

var div = function(array){
  var middle = Math.round(array.length/2);
  var left = []; var right = [];
  for (i=0;i<array.length;i++) {
    if (i < middle) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return[left, right];

}

var merge = function(left, right){
  var temp = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while(leftIndex < left.length || rightIndex< right.length ){
    if(left[leftIndex] <= right[rightIndex] || right[rightIndex] == undefined){
      temp.push(left[leftIndex]);
      leftIndex++;
    }
    else if (left[leftIndex] > right[rightIndex] || left[leftIndex] == undefined){
      temp.push(right[rightIndex]);
      rightIndex++;
    }

  }
  return temp;
}






for(var i=10; i < 20; i++) {
    var num_items = Math.pow(2,i);
    var native_test_array = [];
    var b_test_array = [];
    var m_test_array = []
    for(var j=0; j < num_items; j++) {
        var rand = Math.floor(Math.random() * num_items);
        native_test_array.push(rand);
        b_test_array.push(rand);
        m_test_array.push(rand);
    }

    console.time(num_items + "native");
    native_test_array.sort();
    console.timeEnd(num_items + "native");

    console.time(num_items + "bubble");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + "bubble");

    // console.time(num_items + "merge");
    // mergeSort(m_test_array);
    // console.timeEnd(num_items + "merge");
}
