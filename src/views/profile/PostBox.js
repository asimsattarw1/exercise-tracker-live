import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postDataAction, postDeleteAction } from "../../redux/user/userActions";
import PostCard from '../../components/PostCard';
import '../../css/profile.css';

const PostBox = () => {
    const [post, setPost] = useState('');
    const [apiData, setApiData] = useState([]);
    const [editId, setEditId] = useState('');
    const uname = 'Muhammad Asim Sattar';

    const dispatch = useDispatch();
    const profile = useSelector(state => {
        return state.profile
    })

    // console.log('store: ', profile.postData);

    const handlePost = (e) => {
        const value = e.target.value;
        setPost(value);
    }

    const submitPost = async () => {
        const postObj = {
            name: uname,
            text: post,
            id: editId ?? null
        }

        if (!editId) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postObj)
            };
            fetch('http://localhost:7000/posts/save', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setApiData(data);
                    setPost('');
                });
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postObj)
            };
            fetch('http://localhost:7000/posts/edit', requestOptions)
                .then(response => response.json())
                .then(data => {
                    setApiData(data);
                    setPost('');
                });
        }

        setEditId('');



        // dispatch(postDataAction({
        // name: uname,
        // post: post,
        // }));
        // setPost('');
    }

    const deletePost = (id) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        };

        fetch('http://localhost:7000/posts/delete', requestOptions)
            .then(response => response.json())
            .then(data => {
                setApiData(data);
                setPost('');
            });
        // dispatch(postDeleteAction(id));
    }

    const editPost = ({ id, text }) => {
        setEditId(id);
        setPost(text);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    };

    async function fetchData() {
        const res = await fetch(`http://localhost:7000/posts/get`);
        const data = await res.json();
        if (data) {
            setApiData(data);
        }
    }

    console.log('Data', apiData);

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <>
            <div className='row post'>
                <div className='col-12 px-5 py-5 pb-3'>
                    <textarea className='form-control' type='text' rows='5' placeholder='type you post here...' value={post} onChange={handlePost} />
                    <div className='d-flex justify-content-end'>
                        <button className='btn btn-success mt-3 me-3' onClick={submitPost}>{editId ? 'Update' : 'Post'}</button>
                    </div>
                </div>
            </div>

            {apiData.length !== 0 && apiData.map((item, index) => {
                return (
                    <PostCard {...item} key={index} deletePost={deletePost} editPost={editPost} />
                );
            })}
        </>
    )
}

export default PostBox
