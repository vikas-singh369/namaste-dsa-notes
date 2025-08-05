/**
 * *Approach 1: overwrite in the place of zero the second array value to the first array and use sort() method and sort it. 
 */

function merge1(nums1, m, nums2, n) {
    
    for (let i = 0; i < n; i++) {
        nums1[m+i] = nums2[i]
    }

    nums1.sort((a, b) => a - b);
   
};


/**
 * *Approach 2: Optimized way copy first array and compare copy array and second array and replace the array first value  O{(m + n) log(m + n)} space O(m)
 */
function merge2(nums1, m, nums2, n) {
  let nums1Copy = nums1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if ((p1 < m && nums1Copy[p1] < nums2[p2]) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
}

/**
 * *Approach 3: Space Optimized filled the array in reverse order so no extra space used
 * *Time Complexity O(m+n log m+n)
 * *Space Complexity O(1)
 */

function merge3(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1];
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
  }
}
