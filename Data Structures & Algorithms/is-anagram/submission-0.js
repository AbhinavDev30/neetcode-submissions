class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false;
        // const myMapS = new Map();
        // const myMapT = new Map();
        // for(const char of s){
        //   myMapS.set(char , (myMapS.get(char) || 0) +1)
        // }
        // for(const char of t){
        //   myMapT.set(char , (myMapT.get(char) || 0) + 1)
        // }

        // if(myMapT.size != myMapS.size) return false;

        // for(const [char,qty] of myMapS){
        //     if(myMapT.get(char) !== qty) return false
        // }
        // return true;
        const count = new Map();

        for(const char of s){
            count.set(char,(count.get(char) || 0) + 1)
        }

        for(const char of t){
            count.set(char,(count.get(char)) - 1)
        }

        for(const qty of count.values()){
            if(qty !== 0) return false;
        }

        return true;

    }
}
