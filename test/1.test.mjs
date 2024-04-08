import { describe, it } from "mocha";
import { expect } from "chai";
import twoSum from "../src/1.js";

describe("twoSum", () => {
  // happy path
  it("should return the correct array with the input array of 2 elements", () => {
    expect(twoSum([2, 0], 2)).to.include.members([0, 1]);
  });
  it("should return the correct array with the input array of 3 elements", () => {
    expect(twoSum([2, 0, 1], 2)).to.include.members([0, 1]);
  });

  // edge cases
  it("should return empty array for an input of an empty array", () => {
    expect(twoSum([], 0)).to.be.empty;
  });
  it("should return empty array for an input of an array with 1 element", () => {
    expect(twoSum([1], 0)).to.be.empty;
  });

  // error cases
  it("should return empty array for no any two number sum is equal to target", () => {
    expect(twoSum([1, 1], 0)).to.be.empty;
  });
});
