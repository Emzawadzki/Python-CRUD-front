import { RawPerson, Person } from "./types";

export const parsePerson = (person: RawPerson): Person => ({
  id: person.id,
  firstName: person.first_name,
  lastName: person.last_name,
});
