class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        console.log(strs);

        const resMap = new Map();
        for (let s of strs){
            const key = [...s].sort().join("")

            if(!resMap.has(key)) {
                resMap.set(key, [])
            }

            resMap.get(key).push(s);
        }
        console.log(resMap);

        return [...resMap.values()];
    }
}
