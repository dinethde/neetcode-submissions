class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map();
        const arr = [];
        for (let i = 0; i < nums.length; i++){
            if (nums[i] === target/2) {
                arr.push(i);
                if (arr.length === 2) {
                    return arr;
                }
            }
            numsMap.set(nums[i], i);
        }

        for (const [key , value ] of numsMap){
            if (numsMap.get(target - key) && value !== numsMap.get(target - key)) {
                return [value, numsMap.get(target - key)]
            }
        }
    }
}
