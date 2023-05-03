import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from "./views/home";
import Record from "./views/record";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from 'react-redux';
import Index from './views';
import NewLogin from './views/auth/NewLogin';
import NewSignup from './views/auth/NewSignup';
import Toast from './components/Toast';
import { nullAlertDataAction } from './redux/store/exerciseReducer';

function App() {
    const [cookies] = useCookies(["user"]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const myStore = useSelector((state) => state);

    useEffect(() => {
        if (myStore?.user != null) {
            navigate('/')
        }
        else { navigate('/') }
    }, [
        cookies?.jwt,
        myStore?.user
    ]);

    useEffect(() => {
        dispatch(nullAlertDataAction());
    }, [])

    return (
        <div className='' style={{ position: '' }}>
            <div className='d-flex justify-content-end w-100 pe-4' style={{ zIndex: "99" }}>
                <Toast />
            </div>
            {
                myStore?.user != null && cookies?.jwt ? <Routes>
                    <Route path="/"
                        element={<Home />} />
                    <Route path="/edit/:id"
                        element={<Home />} />
                    <Route path="/all-record"
                        element={<Record />} />
                </Routes> : <Routes>
                    <Route path="/"
                        element={<Index />} />
                    <Route path="/login"
                        element={<NewLogin />} />
                    <Route path="/signup"
                        element={<NewSignup />} />
                </Routes>
            }
        </div>
    );
}

export default App;
