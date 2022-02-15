import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => setCep(event.target.value)}
        name="cep"
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={(event) => setEndereco(event.target.value)}
        name="endereco"
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="normal"
      />
      <TextField
        value={numero}
        onChange={(event) => setNumero(event.target.value)}
        name="numero"
        id="numero"
        label="Número"
        type="numero"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={estado}
        onChange={(event) => setEstado(event.target.value)}
        name="estado"
        id="estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
        name="cidade"
        id="cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
