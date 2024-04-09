/**
 * check if a number is palindrome
 * description:
 * convert to string at first,and then compare
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const str = x.toString();

  for (let i = 0; i < Number.parseInt(str.length / 2); i++) {
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

export default isPalindrome;
