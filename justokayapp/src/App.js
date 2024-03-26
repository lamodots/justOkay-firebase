import logo from './logo.svg';
import { useContext, useState } from 'react';
import { AuthContext } from './context/authContext';
import NonUserRoutes from './routes/NonUserRoutes';
import UserRoutes from './routes/UserRoutes';


function App() {
  const {isLoggedOut} = useContext(AuthContext)
  console.log(isLoggedOut)
  return (
    <div className="App">
        {
          isLoggedOut ? <NonUserRoutes />: <UserRoutes />
        }
    </div>
  );
}

export default App;
