#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

Additional sort implementation. Other search and sort implementation at [Addy Osmani](https://github.com/addyosmani)

> A simple sort with O(n^2) complexity. Sorts array of elements with an empty array and inserts elements one at a time in their proper order.

## Install

```sh
$ npm install --save insertionsort
```


## Usage

```js
var insertionsort = require('insertionsort');

insertionsort([3, 1, 4, 1, 5, 9, 2, 6, 5, 4]); 
// => [1, 1, 2, 3, 4, 4, 5, 5, 6, 9]

insertionsort([5,2,4,6,1,3]);
// => [1,2,3,4,5,6]

// Descending order
function comparator(a, b) { return b - a; }

insertionsort([5,2,2,6,1,3], comparator);

// Works on object and sort it out.
function comparePeople(a, b) { return a.age - b.age };
var people = [
  {name: 'Sindre', age: 30, place: 2},
  {name: 'Passy', age: 25, place: 1},
  {name: 'Stephen', age: 40, place: 4},
  {name: 'Matt', age: 35, place: 3}
];

insertionsort(people, objComparator);
/*
=> [
      {"name": 'Passy', "age": 25, "place": 1},
      {"name": 'Sindre', "age": 30, "place": 2},
      {"name": 'Matt', "age": 35, "place": 3},
      {"name": 'Stephen', "age": 40, "place": 4}
]
*/
```


## License

MIT © [Neil Kim Gardose](https://github.com/nkpgardose)


[npm-url]: https://npmjs.org/package/insertionsort
[npm-image]: https://badge.fury.io/js/insertionsort.svg
[travis-url]: https://travis-ci.org/nkpgardose/insertionsort
[travis-image]: https://travis-ci.org/nkpgardose/insertionsort.svg?branch=master
[daviddm-url]: https://david-dm.org/nkpgardose/insertionsort.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/nkpgardose/insertionsort
