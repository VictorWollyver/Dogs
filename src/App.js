import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeLight } from './Components/Styles/Themes.styled';
import { UserStorage } from './userContext';

import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Login from './Components/Login/Login';
import User from './Conta/User';

import GlobalStyles from './Components/Styles/Global.styled';
import ProtectedRoute from './Components/ProtectedRoute';
import Loading from './Components/Loading';
import Photo from './Components/Feed/Photo';
import UserProfile from './Conta/UserProfile';
import NotFound from './Components/NotFound';


function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <UserStorage>
        <GlobalStyles />
        <div style={{display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh + 10rem)', justifyContent: 'space-between' }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='conta/*' element={<ProtectedRoute> <User /> </ProtectedRoute>} />
          <Route path='foto/:id' element={<Photo />} />
          <Route path='perfil/:user' element={<UserProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        </div>
      </UserStorage>
    </ThemeProvider>
  );
}

export default App;
