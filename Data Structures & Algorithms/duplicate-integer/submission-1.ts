class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let count = 0;
        for (const n of nums){
            for (const j of nums){
                if (n==j) {
                    console.log(n, j)
                    count ++;
                }
            }
            console.log("count : ",count)
            if (count >= 2) return true
            count = 0
        }
        return count > 2 ? true : false;
    }
}
