export function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return {
      valido: false,
      texto: 'Cpf deve ter 11 dígitos',
    };
  }
  return { valido: true, texto: '' };
}

export function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return {
      valido: false,
      texto: 'Senha deve ter entre 4 e 72 dígitos',
    };
  }
  return { valido: true, texto: '' };
}

export function validarNome(nome) {
  if (nome.length < 4 || nome.length > 72) {
    return {
      valido: false,
      texto: 'O nome deve ter entre 4 e 72 dígitos',
    };
  }
  return { valido: true, texto: '' };
}
