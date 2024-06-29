// Given an integer, check whether the integer is a palindrome or not
//
// eg: 121 => 121 is a palindrome because it is the same when reversed
function palindrome(num) {
  return num === +num.toString().split("").reverse().join("");

  // optimized solution for faster runtime because negative integers will not have to run
  // return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}
// 121 => "121" => ["1", "2", "1"] => ["1", "2", "1"] => "121"

// Big-O => O(n)
console.log(palindrome(121));
console.log(palindrome(78));
console.log(palindrome(0));
console.log(palindrome(101));
console.log(palindrome(-11));
