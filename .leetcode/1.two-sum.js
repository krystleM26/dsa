/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   //store indices and numbers
   let newMap = new Map()

   for(let i = 0; i < nums.length; i++){
       let sum = target - nums[i]
       //check if sum exists in map
       if(newMap.has(sum)){
           //return indices
           return [newMap.get(sum), i]
       }
           //add current number to map
           newMap.set(nums[i], i)
   }
    return []   
    
};
// @lc code=end

