import React, { useEffect, useState } from "react";

import { Api } from "./api";
import { Person } from "./api/types";
import { parsePerson } from "./api/helpers";
import Layout from "./components/Layout";

const App: React.FC = () => {
  const [error, setError] = useState("");
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    Api.getPeople().then((res) => {
      if (res.data) {
        setPeople(res.data.map(parsePerson));
      } else {
        setError(res.error);
      }
    });
  }, []);
  return (
    <Layout>
      <h1>People list</h1>
      <ul>
        {people.map(({ id, firstName, lastName }) => (
          <li key={id}>
            {firstName} {lastName}
          </li>
        ))}
      </ul>
      <p>{error}</p>
    </Layout>
  );
};

export default App;
