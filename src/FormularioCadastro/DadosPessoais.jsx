import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';

import ValidacoesCadastro from '../context/ValidacoesCadastro';

function DadosPessoais({ aoEnviar }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { valido: true, texto: '' },
    nome: { valido: true, texto: '' },
  });

  const validacoes = useContext(ValidacoesCadastro);

  function validarCampos(event) {
    const { name, value } = event.target;
    const valido = validacoes[name](value);
    const novoEstado = { ...erros, [name]: valido };
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) return false;
    }
    return true;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valid}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        helperText={erros.cpf.texto}
        name="sobrenome"
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validarCampos}
        name="cpf"
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="Cpf"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            checked={promocoes}
            color="primary"
          />
        }
      ></FormControlLabel>

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            checked={novidades}
            name="novidades"
            color="primary"
          />
        }
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
