class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const length = nums.length;

        const result = new Array(length).fill(1);

        for (let i = 1; i < length; i++) {
            result[i] = result[i-1] * nums[i - 1]
        }
        console.log(result)


        let postfix = 1; 
        for (let i = length -1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i]
        }

        console.log(result)

        return result;
    }
}
