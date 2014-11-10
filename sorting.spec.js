describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles one item", function() {
    expect(bubbleSort(["1"])).toEqual(["1"]);
  });
  it("handles multiple items", function() {
    expect(bubbleSort(["1","4","2"])).toEqual(["1","2","4"]);
  });
  it("handles letters", function() {
    expect(bubbleSort(["z","a","c","b"])).toEqual(["a","b","c", "z"]);
  });
});
describe("Merge Sort", function() {
  it("is able to merge two array", function() {
    expect(merge(["x","z"],["a","y"])).toEqual(["a","x","y","z"]);
  });
  it("is able to split an array into two halves", function() {
    expect(div(["a","x","y","z"])).toEqual([["a","x"],["y","z"]]);
  })
  it("does what it's supposed to", function() {
    expect(mergeSort(["a","z","b","y"])).toEqual(["a","b","y","z"]);
  });
});
