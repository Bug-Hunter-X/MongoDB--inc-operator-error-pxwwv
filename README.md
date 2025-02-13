# MongoDB $inc operator bug
This repository demonstrates a common error when using the `$inc` operator in MongoDB update queries.
The `$inc` operator is used to increment or decrement a numeric field by a specified value.
However, if the value provided is not a number, it will result in an error.

## Bug
The bug lies in the incorrect usage of the `$inc` operator. The `value` parameter should be a number, but in the example, it's a string.

## Solution
The solution involves ensuring that the `value` parameter is a number. This is accomplished by either explicitly defining it as a number or typecasting any string or other value into a number.