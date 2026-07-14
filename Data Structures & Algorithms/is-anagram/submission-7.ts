class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false
        
        const countS = new Map();
        const countT = new Map();

        for (const char of s) {
            if (countS.has(char)){
                countS.set(char, countS.get(char)+1)
                continue
            }
            countS.set(char, 1);
        }

        for (const char of t) {
            if (countT.has(char)){
                countT.set(char, countT.get(char)+1)
                continue
            }
            countT.set(char, 1);
        }

        for (let i = 0; i < s.length; i++){
            countS[s[i]] = (countS[s[i]] || 0) + 1;
            countT[t[i]] = (countT[t[i]] || 0) + 1;
        }

        console.log("s : ", countS);
        console.log("t : ", countT);

        for (const [key, value] of countS){
            if (value !== countT[key]){
                return false
            }
        }

        return true;

    }
}
