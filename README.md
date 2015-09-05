# distribute-array
Distributes one array evenly between a given number of smaller arrays

```javascript
var da = require('distributed-array');
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArr = da(arr, 3);  // newArr is now [ [ 1, 2, 3, 10 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ] 
newArr = da(arr, 5);  // newArr is now [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]
newArr = da(arr, 15); // newArr is now [ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ],
                      //                 [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ],
                      //                 [], [], [], [], [] ]
```
