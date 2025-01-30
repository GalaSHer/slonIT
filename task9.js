Array.prototype.mySlice = function (start = 0, end = this.length) {
  if (start < 0) {
    start = this.length + start;
  }
  if(end < 0) {
    end = this.length + end;
  }
  let deletedItems = this.splice(start, end - start);
  return deletedItems;
};

Array.prototype.myIndexOf = function (item, from = 0) {
  let start = Math.max(from >= 0 ? from : this.length + from, 0);

  for (let i = start; i < this.length; i++) {
    if (this[i] === item) {
      return i;
    }
  }
  return -1;
};

Array.prototype.myIncludes = function(item, from = 0) {
  let start = Math.max(from >= 0 ? from : this.length + from, 0);

  for(let i = start; i < this.length; i++) {
    if(this[i] === item) {
      return true;
    }
  }
  return false;
}
