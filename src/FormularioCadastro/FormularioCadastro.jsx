import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import React from 'react';

function FormularioCadastro({ aoEnviar, validarCpf }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCpf={validarCpf} />
      <DadosUsuario />
    </>
  );
}

export default FormularioCadastro;
