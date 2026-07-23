class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        console.log(nums);

        const out = []
        for(let i = 0; i < nums.length; i++){
            let sum = 1;
            for (let j = 0; j < nums.length; j++){
                if (i === j) {
                    continue;
                }
                sum *= nums[j];
            }
            out[i] = sum;
        }

        console.log(out);

        return out;
    }
}
