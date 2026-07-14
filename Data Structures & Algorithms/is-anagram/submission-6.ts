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

        for (const [key, value] of countS){
            if (value !== countT.get(key)){
                return false
            }
        }

        return true;

    }
}
