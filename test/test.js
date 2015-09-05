var should = require('should');

describe('General tests', function() {
  
  var da = require('../');

  it('generating DA on array with 10 elements', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var distArr = [];

    distArr = da(arr, 1);
    distArr.should.eql([ [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] ]);

    distArr = da(arr, 2);
    distArr.should.eql([ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]);

    distArr = da(arr, 3);
    distArr.should.eql([ [ 1, 2, 3, 10 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]);

    distArr = da(arr, 4);
    distArr.should.eql([ [ 1, 2, 9 ], [ 3, 4, 10 ], [ 5, 6 ], [ 7, 8 ] ]);

    distArr = da(arr, 5);
    distArr.should.eql([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]);

    distArr = da(arr, 6);
    distArr.should.eql([ [ 1, 7 ], [ 2, 8 ], [ 3, 9 ], [ 4, 10 ], [ 5 ], [ 6 ] ]);

    distArr = da(arr, 7);
    distArr.should.eql([ [ 1, 8 ], [ 2, 9 ], [ 3, 10 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ] ]);

    distArr = da(arr, 8);
    distArr.should.eql([ [ 1, 9 ], [ 2, 10 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ] ]);

    distArr = da(arr, 9);
    distArr.should.eql([ [ 1, 10 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ] ]);

    distArr = da(arr, 10);
    distArr.should.eql([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ] ]);
    distArr = da(arr, 11);
    distArr.should.eql([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [] ]);

    distArr = da(arr, 15);
    distArr.should.eql([ [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [], [], [], [], [] ]);

  });

  it('generating DA on array with 27 elements', function() {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
               16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
    var distArr = [];
    distArr = da(arr, 5);
    distArr.should.eql([ [ 1, 2, 3, 4, 5, 26 ],
                         [ 6, 7, 8, 9, 10, 27 ],
                         [ 11, 12, 13, 14, 15 ],
                         [ 16, 17, 18, 19, 20 ],
                         [ 21, 22, 23, 24, 25 ] ]);
    distArr = da(arr, 3);
    distArr.should.eql([ [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
                         [ 10, 11, 12, 13, 14, 15, 16, 17, 18 ],
                         [ 19, 20, 21, 22, 23, 24, 25, 26, 27 ] ]);
  });
})
