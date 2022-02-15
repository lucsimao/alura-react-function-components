import React, { useState } from 'react';

import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import { Typography } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCpf }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCpf={validarCpf} />;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography>Erro ao selecionar formulário</Typography>;
    }
  }

  return <>{formularioAtual(etapaAtual, { aoEnviar, validarCpf })}</>;
}

export default FormularioCadastro;
