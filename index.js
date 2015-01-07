'use strict';

function comparator(a, b) { return a - b; }
module.exports = function (list, cmp) {
  cmp = cmp || comparator;

  var j, 
      itemToInsert, 
      stillLooking;

  for(var i = 1, size = list.length; i < size; i++) {
    itemToInsert = list[i];
    j = i - 1;
    stillLooking = true;

    while((j >= 0) && stillLooking) {
      if(cmp(itemToInsert, list[j]) < 0) {
        list[j + 1] = list[j];
        j--;
      } else {
        stillLooking = false;
      }
    }
    list[j + 1] = itemToInsert;
  }

  return list;
};
