import React from 'react';
import InnerNavbar from '../../components/InnerNavbar';
import PaginatedItems from './components/PaginatedItems';

const Record = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 navbar-wrapper shadow navWrapper'><InnerNavbar /></div>
        <div className='col-10'>
          <div className='container-fluid'>
            <PaginatedItems itemsPerPage={4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Record
