class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map();
        for (let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if (numsMap.get(diff) !== undefined && numsMap.get(diff) !== i) {
                return [i, numsMap.get(diff)]
            }

            numsMap.set(nums[i], i);
        }
    }
}
