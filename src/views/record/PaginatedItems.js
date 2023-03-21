import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { getActivitiesList } from '../../redux/store/actions';
import ActivityCard from '../../components/ActivityCard';


function Items({ currentItems }) {
    const dispatch = useDispatch();
    const deleteActivity = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        };

        fetch('http://localhost:7000/activity/delete', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data) {
                    dispatch(getActivitiesList());
                }
                // setApiData([...data?.data]);
            });
    }
    return (
        <div className='container'>
            <div className='row mt-5'>
                {currentItems &&
                    currentItems.map((items, index) => (
                        <div className='col-4' key={index} style={{height:'400px'}}>
                            <ActivityCard {...items} deleteActivity={deleteActivity} />
                        </div>
                    ))}
            </div>
        </div>
    );
}

function PaginatedItems({ itemsPerPage }) {
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const dispatch = useDispatch();
    const items = useSelector((state) => state?.activitiesList);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default PaginatedItems;
