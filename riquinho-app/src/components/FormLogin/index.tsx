import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export function FormLogin() {
  return(
    <form className={styles.login} action="">
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" placeholder="seuemail@email.com" autoComplete='off' />
      <label htmlFor="senha">Senha</label>
      <input type="password" name="senha" id="senha" placeholder="**************"/>
      <button type="submit">Entrar</button>
      <p>Ainda não tem uma conta? <Link to="/cadastro">cadastre-se</Link></p>
    </form>
  )
}