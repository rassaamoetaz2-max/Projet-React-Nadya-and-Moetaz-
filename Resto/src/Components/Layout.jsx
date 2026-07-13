import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
function Layout({ user, logOut, setMode }) {
  const layoutStyle = {
 background: 'linear-gradient(150deg, rgba(255, 0, 89, 0), rgba(255, 0, 89, 0.1), rgba(255, 0, 89, 0.12), rgba(255, 0, 89, 0.5))',
     backgroundAttachment: 'fixed',
    minHeight: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0
  };

  return (
    <div style={layoutStyle}>
      <Navbar user={user} logOut={logOut} setMode={setMode} />
      <Outlet />
      <Footer></Footer>
    </div>
  );
}

export default Layout;


/*    background: 'linear-gradient(150deg, rgba(255, 0, 89, 0), rgba(255, 0, 89, 0.1))  , rgba(255, 0, 89, 0.12), rgba(255, 0, 89, 0.5))', */