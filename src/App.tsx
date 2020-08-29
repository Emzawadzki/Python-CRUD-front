import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Api } from "./api";
import { Person } from "./api/types";
import { parsePerson } from "./api/helpers";

const Title = styled.h1``;

export const App: React.FC = () => {
  const [error, setError] = useState("");
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    Api.getPeople().then((res) => {
      if (res.status === "success") {
        setPeople(res.data.map(parsePerson));
      } else if (res.status === "error") {
        setError(res.error);
      }
    });
  }, []);
  return (
    <>
      <Title>People list</Title>
      <ul>
        {people.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
      <p>{error}</p>
    </>
  );
};
