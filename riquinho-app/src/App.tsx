import './app.styles.scss';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CadastroPage } from './pages/Cadastro';
import { LoginPage } from './pages/Login';
import { TransacaoPage } from './pages/Transacao';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<TransacaoPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
