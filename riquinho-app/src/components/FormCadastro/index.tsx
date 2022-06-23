import styles from './styles.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';
import toast from 'react-hot-toast';

export function FormCadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [senha, setSenha] = useState<any>();

  const handleNome = (event: any) => {
    setNome(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event: any) => {
    setSenha(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log({ nome, email, senha });

    api
      .post('/user', {
        nome,
        email,
        senha,
      })
      .then(() => {
        toast.success('Cadastro realizado com sucesso');
        navigate('/login');
      })
      .catch((error: any) => {
        toast.error(error.response.data.message);
        setEmail('');
        setNome('');
        setSenha('');
      });
  };

  return (
    <form className={styles.cadastro} onSubmit={(e) => handleSubmit(e)}>
      <div className={styles.inputs}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="seu nome"
          autoComplete="off"
          onChange={(e) => handleNome(e)}
          value={nome}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="seuemail@email.com"
          autoComplete="off"
          onChange={(e) => handleEmail(e)}
          value={email}
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          placeholder="**************"
          onChange={(e) => handleSenha(e)}
          value={senha}
        />
      </div>
      <div className={styles.submit}>
        <button type="submit">Cadastrar</button>
        <p>
          Já tem uma conta? <Link to="/login">entre agora</Link>
        </p>
      </div>
    </form>
  );
}
