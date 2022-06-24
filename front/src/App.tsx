import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CadastroPage } from './pages/CadastroPage';
import { LoginPage } from './pages/LoginPage';

import { NotificationsProvider } from '@mantine/notifications';
import { TransacaoPage } from './pages/TransacaoPage';
import { ModalProvider } from './context/ModalContext/ModalContext';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <NotificationsProvider position="top-center">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TransacaoPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cadastro" element={<CadastroPage />} />
            </Routes>
          </BrowserRouter>
        </NotificationsProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
