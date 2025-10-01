# Kids With the Greatest Number of Candies 

Question Details - [Link](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75)



## Approach :

First find the `ith` kid that have max candies, 

After that traverse the loop and give all the kid one by one all extra candy and compare with the max candy if after giving all extra candies kid has equal or greter candy then `true` otherwise `false`

```
maxCandy ;

for( i = 0; i< candies; i++){
  if(candies[i] + extracandy >=  maxCandy){
    true
  }else {
    false
  }
}

return boolen value result array.
```

### Time And Space Complexity

**Time-complexity :** O(n)
**Space-complexity :** O(n) 

**[Code](./solution.js)**

**By vikas singh**
