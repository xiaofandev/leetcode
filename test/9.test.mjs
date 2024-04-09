import { describe, it } from "mocha";
import { expect } from "chai";
import isPalindrome from "../src/9.js";

describe("twoSum", () => {
  // edge cases
  it("should return false for the number less than 0", () => {
    expect(isPalindrome(-10)).is.false;
  });
  it("should return true for the number >=0 and <=9", () => {
    expect(isPalindrome(0)).is.true;
  });
  it("should return true for the number >=0 and <=9", () => {
    expect(isPalindrome(9)).is.true;
  });
  it("should return true for the number greater than 9(the number 11)", () => {
    expect(isPalindrome(11)).is.true;
  });
  it("should return true for the number greater than 9(the number 101)", () => {
    expect(isPalindrome(101)).is.true;
  });
  it("should return false for the number greater than 9(the number 13)", () => {
    expect(isPalindrome(13)).is.false;
  });
  it("should return false for the number greater than 9(the number 133)", () => {
    expect(isPalindrome(133)).is.false;
  });
});
