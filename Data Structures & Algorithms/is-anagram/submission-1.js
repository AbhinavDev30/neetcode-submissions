class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    // First lets go with brute force approch traverse both the strings and use hashmap and then compare both the strings

    // The only problem with this approch is that we are using two maps and they are taking equally space so issue is space


    // const sCount = new Map()
    // const tCount = new Map()
    //    if(s.length !== t.length) return false;
    //    for(let char of s){
    //      sCount.set(char,(sCount.get(char) || 0) + 1)
    //    }
    //    for(let char of t){
    //     tCount.set(char,(tCount.get(char) || 0) + 1)
    //    }
    //    if(sCount.size !== tCount.size) return false;

    //    for(let char of s){
    //     if(sCount.get(char) != tCount.get(char)){
    //         return false
    //     }
        
    //    }
    //    return true

    // Now lets work with more optimized approch we will use one one map

    if(s.length != t.length) return false;
    const sCount = new Map()

    for(const char of s){
        sCount.set(char,(sCount.get(char) || 0) + 1)
    }

    for(const char of t){

        sCount.set(char,sCount.get(char) - 1 )
    }

    for(const qty of sCount.values()){
        if(qty !== 0){
            return false
        }
    }

    return true;
    
    }
}
