import { describe, it } from "mocha";
import { expect } from "chai";
import findMiddleIndex from "../src/1991.js";

describe("findMiddleIndex", () => {
  // happy path
  it("should return the first index for an array with 2 elements", () => {
    expect(findMiddleIndex([[2, 0]])).to.equal(0);
  });
  it("should return the last index for an array with 2 elements", () => {
    expect(findMiddleIndex([0, 2])).to.equal(1);
  });
  it("should return the first index for an array with 3 elements", () => {
    expect(findMiddleIndex([[2, 1, -1]])).to.equal(0);
  });
  it("should return the last index for an array with 3 elements", () => {
    expect(findMiddleIndex([1, -1, 2])).to.equal(2);
  });

  // edge cases
  it("should return -1 for an empty array", () => {
    expect(findMiddleIndex([])).to.equal(-1);
  });
  it("should return 0 for an array with one element", () => {
    expect(findMiddleIndex([1])).to.equal(0);
  });

  // error cases
  it("should return -1 for an array with no middle element be found", () => {
    expect(findMiddleIndex([1, 1])).to.equal(-1);
  });
});
