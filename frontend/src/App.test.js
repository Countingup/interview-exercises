import data from "./out.json";

it("should read data", () => {
  expect(data).toHaveLength(11);
});
