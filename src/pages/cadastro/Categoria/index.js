import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const inicialValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(inicialValues);

  function setValue(key, value) {
    setValues({ ...values, [key]: value });
  }

  function handleChange(eventInfo) {
    setValue(eventInfo.target.getAttribute('name'), eventInfo.target.value);
  }

  function handleSubmit(eventInfo) {
    eventInfo.preventDefault();
    setCategories([...categories, values]);
    setValues(inicialValues);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias' : 'https://gatoflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (serverResponse) => {
        const response = await serverResponse.json();
        setCategories([...response]);
      });
  });

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      Lista de categorias
      <ul>
        {categories.map((categorie, index) => (
          <li key={`${categorie}${index + 3}`}>
            {categorie.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Link pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
