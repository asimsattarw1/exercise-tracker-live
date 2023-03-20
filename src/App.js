import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./views/home";
import Record from "./views/record";
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import { useCookies } from "react-cookie";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const [cookies] = useCookies(["user"]);
  const navigate = useNavigate();
  const myStore = useSelector((state) => state);

  useEffect(() => {
    if (myStore?.user != null) { navigate('/') }
    else { navigate('/login') }
  }, [cookies?.jwt, myStore?.user]);

  return (
    <div className=''>
      {myStore?.user != null && cookies?.jwt ?
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/activity-record" element={<Record />} />
        </Routes>
        :
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      }
    </div>
  );
}

export default App;
