class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // hasDuplicate(nums) {
    //     // so the brute force approch can be nested loop
    //     for(let i=0; i<nums.length; i++){
    //         for(let j=i+1; j<nums.length; j++){
    //             if(nums[i] == nums[j]){
    //                 return true
    //             }
    //         }
    //     }
    //     return false
    // }

//  now lets see the optimized approch with set


    hasDuplicate(nums){
     const mySet = new Set()
     for(let i=0; i<nums.length; i++){
        if(mySet.has(nums[i])){
            return true;
        }
        mySet.add(nums[i])
     }
     return false;
    }
}
