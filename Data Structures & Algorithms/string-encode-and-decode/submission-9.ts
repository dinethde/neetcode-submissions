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
        const result: string[] = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            const length = parseInt(str.slice(i, j), 10);
            const decoded = str.slice(j + 1, j + 1 + length);
            result.push(decoded);
            i = j + 1 + length;
        }

        return result;
    }

}
