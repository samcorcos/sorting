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
