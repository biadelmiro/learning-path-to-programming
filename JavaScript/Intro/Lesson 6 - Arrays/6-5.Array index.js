var array = ['A', 'B', 2, 0.5, true, null, NaN, undefined];
//An array starts with o index. When called index 1, it will print 'B'.
console.log(array[1]);
/*Undefined will be returned if we call an index greater than the array length.
Yet we can change later the value inside an array, assining to a index in
that array a value of our choice*/
array[1] = 'AC';
