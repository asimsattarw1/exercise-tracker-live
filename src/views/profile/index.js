import React from 'react';
import AppNavbar from '../../components/AppNavbar';
import UserDetails from '../../components/UserDetails';
import PostBox from './PostBox';

export default function Profile() {

    return (
        <>
            <UserDetails />
            <AppNavbar />
            <PostBox />
        </>
    )
}
