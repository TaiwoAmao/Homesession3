function findMissing(arr1, arr2) {
  if(arr1.length=== 0 && arr2.length=== 0){  // checks if both array is empty and returns zero
      return 0;                            
    }else if(arr1.length == arr2.length){      // checks if length of both array is equal
      if(arr1.toString() == arr2.toString()){  // If it is the same, then check if the content is the same
        return 0;                          // If the content is the same return zero
      }

    }else{  
    return parseInt(arr1
      .filter(el => !arr2.includes(el))   // Check for the difference and parse through parseInt
      .concat(                            // to convert to a number instead of an array
        arr2.filter(el => !arr1.includes(el))
      ))
 }
}
