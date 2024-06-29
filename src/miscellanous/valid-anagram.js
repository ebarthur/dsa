// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

// Approach 1
function validAnagram(s, t) {
  const sx = s.split("").sort().join("");
  const tx = t.split("").sort().join("");

  return sx === tx;
}

// sad => ["s","a","d"] => ["a","d","s"] => ads
// ads => ["a","d","s"] => ["a","d","s"] => ads
console.log(validAnagram("sad", "ads")); //true

// Approach 2: Objects
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram("sad", "ads")); //true
console.log(isAnagram("sad", "mum")); //true
