class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      // Lets first go with brute force approch (nested loop)
        // for(let i=0 ; i < nums.length; i++){
        //   for(let j=i+1; j < nums.length; j++){
        //        if(nums[i] + nums[j] == target){
        //            return [i , j]
        //        }
        //   }
        // }

        // Now lest go with optimized approch

        const seen = new Map();
        for(let i=0; i < nums.length; i++){
           const compliment = target - nums[i]
           if(seen.has(compliment)){
            return [seen.get(compliment), i]
           }
           seen.set(nums[i] , i)
        }

             
    }
}
