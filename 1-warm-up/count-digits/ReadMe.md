# Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

[Practice-Platform](https://namastedev.com/playground)

## Requirements:
Handles both positive and negative integers.
Return 1 if n is 0(since 0 is a single-digit number).

## Examples:
Input:259

Output:3

Input:-1035

Output:4

Input:0

Output:1

## My Approach : 
my approach initilize `conut` variable and loop the number using `while` loop and the condition is `n>0`,then divide the value `10` again and again until the condition break and increse the value by 1 every repetation of the loop. after the condition break retrun the value `count`.

- Handling zero : if `n===0` return `1`

- Handling the negative number: make the value absolute using `Math.abs()`.


```
count = 0;
while(n>1){
  n = n/10;
  count++
}

return count
```

[code](./solution.js)

**By vikas singh**