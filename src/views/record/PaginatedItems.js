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
                        <div className='col-4' key={index} style={{ height: '400px' }}>
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
    const [currentItems, setCurrentItems] = useState([]);
    const [search, setSearch] = useState('');
    const [filterBy, setfilterBy] = useState(true);

    // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const dispatch = useDispatch();
    const store = useSelector((state) => state?.activitiesList);

    // Simulate fetching items from another resources.
    // (This could be items from props; or items loaded in a local state
    // from an API endpoint with useEffect and useState)
    // const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    // const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(store.length / itemsPerPage);

    // Invoke when user click to request another page.
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
        } else {
            const endOffset = itemOffset + itemsPerPage;
            const currItems = store.slice(itemOffset, endOffset);
            setCurrentItems(currItems);
        }

    }, [itemOffset, search])

    return (
        <>
            <div class="input-group mt-3">
                <button class="btn btn-success" type="submit" onClick={() => {
                    setfilterBy(!filterBy);
                    setSearch('');
                }}>{filterBy ? 'Filter by date' : 'Filter By activity'}</button>
                {
                    filterBy ?
                        <input type="text" class="form-control" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} /> :
                        <input type="date" class="form-control" value={search} onChange={(e) => setSearch(e.target.value)} />
                }
                {/* <button class="btn btn-success" type="submit">Go</button> */}
            </div>
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
