class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = "";
        for (const s of strs) {
            encoded += s.length + "#" + s;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let res: string[] = []
        let i: number = 0;
        let count: string = ""
        
        for (;i < str.length;) {
            count+=str[i++];
            if (str[i] === '#') {
                res.push(str.slice(i + 1, i + Number(count) + 1))
                i = i + Number(count) + 1 
                count = ""
            }
        }

        return res;
    }

}
