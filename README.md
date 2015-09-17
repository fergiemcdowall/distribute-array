
[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

# distribute-array
Distributes one array evenly between a given number of smaller arrays

```javascript
var da = require('distribute-array');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArr = da(arr, 3);  // newArr is now [ [ 1, 2, 3, 10 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
newArr = da(arr, 5);  // newArr is now [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
newArr = da(arr, 15); // newArr is now [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ],
                      //                 [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ],
                      //                 [], [], [], [], [] ]
```


[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/distribute-array
[npm-version-image]: http://img.shields.io/npm/v/distribute-array.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/distribute-array.svg?style=flat

[travis-url]: http://travis-ci.org/fergiemcdowall/distribute-array
[travis-image]: http://img.shields.io/travis/fergiemcdowall/distribute-array.svg?style=flat
