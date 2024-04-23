function palindrome(num) {
  return num === +num.toString().split('').reverse().join('');
}

test('checks whether a number is a palindrome or not', () => {
  expect(palindrome(51515)).toBe(true);
});
