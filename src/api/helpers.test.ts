import { parsePerson } from "./helpers";
import { RawPerson } from "./types";

const testPerson: RawPerson = {
  id: 6,
  first_name: "test-first-name",
  last_name: "test-last-name",
};

describe("persePerson", () => {
  it("should return parsed data", () => {
    expect(parsePerson(testPerson)).toMatchSnapshot();
  });
});
