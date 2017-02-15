Array.prototype.toTwenty = function() {
    /*
  * return [1, 2 . . . 20]
  */
  var oneToTwenty = [];
  for (var i = 1; i <= 20; i++) {
    oneToTwenty.push(i);
  }
  return oneToTwenty;
};
Array.prototype.toForty = function() {
  /*
  * return [2, 4, . . . 40]
  */
  var twoToForty = [];
  for (var j = 2; j <= 40; j+=2) { 
    twoToForty.push(j);
  }
  return twoToForty;
};
Array.prototype.toOneThousand = function() {
    /*
  * return [10, 20 . . . 1000]
  */
  var tenToOneThousand = [];
  for (var k = 10; k <= 1000; k+=10) {
      tenToOneThousand.push(k);
  }
  return tenToOneThousand;
};
Array.prototype.search = function (n) {//defined my search function here.
  //checks if the parameter n is a number object.
  if(typeof(n)=="number"){
  /*
 * Binary search implementation to return
 * {count : c, index: i, length: n}
 */
  /*min means 'minimum Sub Array Index',
    max means 'maximum Sub Array Index',
    mid means 'current Sub Array Index'.*/
  var max = this.length - 1;
  var min = 0;
  var mid;
  var search = {
    count: 0,
    index: mid,
    length: this.length
  };
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (this[min] === n || this[max] === n) {
      if (this[max] === n) {
        search.index = max;
      }
      else {
        search.index = min;
      }
      return search;
    }
    /*mid = Math.floor((right + left) / 2);
        if (this[mid] < n) {
            left = mid + 1;
            right--;
        }
        else if (this[mid] > n) {
            right = mid - 1;
            left++;
        }
        else {
            obj.index = mid;
            return obj;
        }
        obj.count++;*/
    
    if (this[mid] < n) {
      min = mid + 1;
      max--;
    }
    else if (this[mid] > n) {
      max = mid - 1;
      min++;
    }
    else {
      search.index = mid;
      return search;
    }
    search.count++;
  }
  search.index = -1;
  return search;
}else{
  return "Please, input a number.";
}
};