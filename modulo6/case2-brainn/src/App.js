import axios from "axios";
import React, { useEffect, useState } from "react";
import Loteria from "./components/Loteria";
import { BASE_URL } from "./constants/BASE_URL";

const App = () => {
  const [loterias, setLoterias] = useState([]);
  const [controleInput, setControleInput] = useState(0);
  const [loteriasConcursos, setLoteriasConcursos] = useState([]);
  const [concurso, setConcurso] = useState({ numeros: [] });

  const fetchLoterias = () => {
    const url = `${BASE_URL}/loterias`;
    axios
      .get(url)
      .then((response) => {
        setLoterias(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const fetchConcursos = () => {
    const url = `${BASE_URL}/loterias-concursos`;
    axios
      .get(url)
      .then((response) => {
        setLoteriasConcursos(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  const fetchConcursoPorId = () => {
    const { concursoId } = loteriasConcursos?.find((lc) => {
      return lc.loteriaId === controleInput;
    });
    const url = `${BASE_URL}/concursos/${concursoId}`;
    axios
      .get(url)
      .then((response) => {
        setConcurso(response.data);
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  useEffect(() => {
    fetchLoterias();
    fetchConcursos();
  }, []);

  useEffect(() => {
    if (controleInput > -1 && loteriasConcursos.length) {
      fetchConcursoPorId();
    }
  }, [loteriasConcursos, controleInput]);

  const onChangeSelect = (event) => {
    setControleInput(Number(event.target.value));
  };

  return (
        <Loteria {...concurso} loterias={loterias}>
          <select value={controleInput} onChange={onChangeSelect}>
            {loterias?.map((loteria, index) => {
              return (
                <option key={index} value={loteria.id}>
                  {loteria.nome.toUpperCase()}
                </option>
              );
            })}
          </select>
        </Loteria>
  );
};

export default App;
