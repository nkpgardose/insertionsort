/*global describe, it */
'use strict';
var assert = require('assert');
var insertionsort = require('../');

var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

function desc(a, b) {
  return b - a;
}

function objComparator(a, b) {
  return a.age - b.age;
}

describe('insertionsort node module', function () {
  it('should work with empty arrays', function() {
    assert.deepEqual(insertionsort([]), []);
  });

  it('should sort the given array', function() {
    assert.deepEqual(insertionsort([3, 5, 2, 1, 2]), [1, 2, 2, 3, 5]);
    assert.deepEqual(insertionsort([100, 90, 20, 233, 13]), [13, 20, 90, 100, 233]);
    assert.deepEqual(insertionsort([100, 90, 20, 233, 13]), [13, 20, 90, 100, 233]);
  });

  it('should sort the given array in ascending order', function() {
    assert.deepEqual(insertionsort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]), [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]);
    assert.deepEqual(insertionsort([9, 2, 8, 6, 1, 3]), [1, 2, 3, 6, 8, 9]);
    assert.deepEqual(insertionsort([5, 2, 2, 6, 1, 3]), [1, 2, 2, 3, 5, 6]);
    assert.deepEqual(insertionsort([5, 2, 4, 6, 1, 3]), [1, 2, 3, 4, 5, 6]);
    assert.deepEqual(insertionsort([0, 0, 0, 0, 0, -1]), [-1, 0, 0, 0, 0, 0]);
  });

  it('should sort the given array in descending order', function () {
    assert.deepEqual(insertionsort([4, 2, 2, 6, 1, 3], desc), [6, 4, 3, 2, 2, 1]);
    assert.deepEqual(insertionsort([0, 0, 0, 0, 0, 1], desc), [1, 0, 0, 0, 0, 0]);
    assert.deepEqual(insertionsort([0, 0, 0, 0, 0, -1], desc), [0, 0, 0, 0, 0, -1]);
  });

  it('should work with array of objects in ascending order', function() {
    assert.deepEqual(insertionsort(people, objComparator), [
      {"name": 'Passy', "age": 25, "place": 1},
      {"name": 'Sindre', "age": 30, "place": 2},
      {"name": 'Matt', "age": 35, "place": 3},
      {"name": 'Stephen', "age": 40, "place": 4}]
    );
  });
});
