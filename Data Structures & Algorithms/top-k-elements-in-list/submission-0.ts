class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        console.log(nums);

        const map = new Map();
        for (let i = 0; i < nums.length; i++){
            map.set(nums[i], (map.get(nums[i]) || 0 ) +1);
        }
        console.log(map);

        const sortedMap = new Map([...map].sort(((a, b) => b[1] - a[1])))
        console.log(sortedMap)

        const res = []
        for (let i=0; i<k; i++){
            res.push([...sortedMap][i][0])
        }

        return res;
    }
}
