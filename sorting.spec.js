describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([]).toEqual([]));
  });
  it("handles one item", function() {
    expect(bubbleSort(["1"]).toEqual(["1"]));
  });
  it("handles multiple items", function() {
    expect(bubbleSort(["1","4","2"]).toEqual(["1","2","4"]));
  });
  it("handles letters", function() {
    expect(bubbleSort(["a","c","b"]).toEqual(["a","b","c"]));
  });
});
// describe("Merge Sort", function() {
//   it("is able to merge two array", function() {
//
//   });
// });
