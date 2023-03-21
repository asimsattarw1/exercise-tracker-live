import React from 'react';
import AppNavbar from '../../components/AppNavbar';
import CardList from './CardList';
import PaginatedItems from './PaginatedItems';

export default function Record() {
  return (
    <>
      <AppNavbar />
      {/* <CardList/> */}
      <PaginatedItems itemsPerPage={4}/>

    </>
  )
}
