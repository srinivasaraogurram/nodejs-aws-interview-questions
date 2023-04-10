var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let start = 0;
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] > start) {
            start = map[s[i]]
        }
        map[s[i]] = i
        max = Math.max(max, i - start + 1)
    }
    return max
};
console.log(lengthOfLongestSubstring("GEEKSFORGEEKS"));