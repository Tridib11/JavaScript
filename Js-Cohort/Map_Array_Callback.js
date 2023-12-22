// function mapArray(arr, callback) {
//     var result = []; 
//     for (var i = 0; i < arr.length; i++) {
//       // Modify this line to pass only the current element and its index to the callback
//       result.push(callback(arr[i]));
//     }  
//     return result;
//   }
//   // Example usage:
//   var numbers = [1, 2, 3, 4, 5];
//   // Define a callback function to square each element
//   function sum(value) {
//     return value+1;
//   }
//   var modifiedValues = mapArray(numbers, sum);
//   console.log(modifiedValues); 
  

//same code using foreach loop

function mapArray(arr, callback) {
    var result = [];
  
    arr.forEach(function (element) {
      // Modify this line to pass only the current element to the callback
      result.push(callback(element));
    });
  
    return result;
  }
  
  // Example usage:
  var numbers = [1, 2, 3, 4, 5];
  
  // Define a callback function to increment each element by 1
  function sum(value) {
    return value + 1;
  }
  
  // Use mapArray to apply the sum function to each element of the numbers array
  var modifiedValues = mapArray(numbers, sum);
  
  console.log(modifiedValues); // Output: [2, 3, 4, 5, 6]
  