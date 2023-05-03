import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import MDBTbl from '../../../components/MDBTbl';

function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);
    const [currentItems, setCurrentItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filterBy, setfilterBy] = useState(true);

    const store = useSelector((state) => state?.activitiesList);
    // const user = useSelector(state => state.user?.user);

    const pageCount = Math.ceil(store.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % store.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if (search) {
            const endOffset = itemOffset + itemsPerPage;
            const filtered = store.filter(elem => elem?.activity.toLowerCase() == search.toLocaleLowerCase() || elem?.date == search);
            const currItems = filtered.slice(itemOffset, endOffset);
            setCurrentItems(currItems);
        }
        else {
            const endOffset = itemOffset + itemsPerPage;
            const currItems = store.slice(itemOffset, endOffset);
            setCurrentItems(currItems);
        }
    }, [itemOffset, search, store.length]);


    return (
        <div className='d-flex flex-column w-100'>
            <div className='row d-flex justify-content-between bg-light py-4 px-3 mt-4'>
                <div className="col-6 input-group">
                    <button className="btn btn-success" type="submit" onClick={() => {
                        setfilterBy(!filterBy);
                        setSearch('');
                    }}>{filterBy ? 'Filter by date' : 'Filter By activity'}</button>
                    {
                        filterBy ?
                            <input type="text" className="form-control" placeholder="Search activity...." value={search} onChange={(e) => setSearch(e.target.value)} /> :
                            <input type="date" className="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
                    }
                </div>
            </div>
            <hr />

            <div className='shadow d-flex justify-content-between bg-light py-4 px-3 mt-4'>
                <MDBTbl currentItems={currentItems} />
            </div>

            <div className='d-flex justify-content-center mt-5'>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount ?? 0}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
        </div>
    );
}

export default PaginatedItems;
