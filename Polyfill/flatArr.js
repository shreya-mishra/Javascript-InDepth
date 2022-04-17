let toFlat = [[1, 2, 3], 3, [4, [4, 3], 3]];
Array.prototype.myFlat = function () {
  let flatArray = [];
  for (var i = 0; i < this.length; i++) {
    if (Array.isArray(this[i])) {
      flatArray = flatArray.concat(this.myFlat.call(this[i]));
    } else {
      flatArray.push(this[i]);
    }
  }
  return flatArray;
};

const result = toFlat.myFlat();
console.log(result);



// 2nd method 
const newArr = [1,3,4,[1,2,3,[2,3]],[4,8]]

const flatMethod = (arr) =>{
 let flatArr = [];
 for(var i =0;i<arr.length;i++){
 console.log(i)
  if(Array.isArray(arr[i]))
    flatArr = flatArr.concat(flatMethod(arr[i]));
  
  else
   flatArr.push(arr[i])
  
  
 
 }
 return flatArr;
}

console.log(flatMethod(newArr))
