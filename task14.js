//фильтрация без использования встроенных методов массива
function myFilter(array, callback) {
  let filteredArray = []
  let index = 0

  for(let i=0; i < array.length; i++){
    if (callback(array[i])) {
      filteredArray[index] = array[i]
      index++
    }
  }
  return filteredArray
}