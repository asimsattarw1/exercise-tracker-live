import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import CardGallary from '../../components/CardGallary';
import InnerNavbar from '../../components/InnerNavbar';
import { getActivitiesList } from '../../redux/store/actions';
import Modal from './components/Modal';

const Home = () => {

    const [cookies] = useCookies(["user"]);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user?.user);

    useEffect(() => {
        if (user?._id && cookies?.jwt) {
            dispatch(getActivitiesList({uid:user._id, token: cookies?.jwt}));
        }
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2 navbar-wrapper shadow navWrapper'>
                    <InnerNavbar />
                </div>
                <div className='col-10'>
                    <div className='container-fluid' style={{maxHeight:'95vh', overflowY:'scroll'}}>
                        <Modal />
                        <CardGallary />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
