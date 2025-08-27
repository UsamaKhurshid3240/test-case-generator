module.exports.generate = function (fileName) {
  return `
// Auto-generated tests for ${fileName}
describe("${fileName}", () => {
  test("should run a dummy test", () => {
    expect(true).toBe(true);
  });
});
  `;
};
