class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        console.log(strs);

        const mapIn = new Map();
        const map = new Map();
        for (let i = 0; i < strs.length; i++){
            mapIn.set(i, strs[i]);
            map.set(i, strs[i].split("").sort().join(""));
        }
        console.log(map);

        const pairMap = new Map();
        for (let i = 0; i < map.size; i++){
            const intArr = []
            for (let j = i; j < map.size; j++){
                if (map.get(i) === map.get(j)){
                    intArr.push(j)
                }
            }
            if (!pairMap.has(map.get(i))){
                pairMap.set(map.get(i), intArr)
            }
        }

        const rl = [];
        for (const n of pairMap.values()){
            const rs = [];
            for (const j of n){
                rs.push(mapIn.get(j))
            }
            console.log("rs : ", rs);
            rl.push(rs)
        }

        return rl;
    }
}
