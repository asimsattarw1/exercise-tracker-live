import React from 'react';
import profPic from '../assets/images/oip.jfif';
import ShareIcon from '@mui/icons-material/Share';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const PostCard = (props) => {

    return (
        <div>
            <div className="card m-0 p-0 mt-3 mb-5" style={{ width: '100%' }}>
                <div className='row'>
                    <div className='' style={{ width: '150px', maxHeight: 'auto' }}>
                        <img className="card-img-top" src={profPic} alt="Card image" />
                    </div>
                    <div className='col'>
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <h4 className="card-title text-primary">{props?.name}</h4>
                                <div>
                                    <ShareIcon />
                                    <DeleteForeverIcon className='ms-3 text-danger' onClick={() => props.deletePost(props?._id)} />
                                    <EditIcon className='ms-3 text-warning' onClick={() => props.editPost({ id: props?._id, text: props?.text })} />
                                </div>
                            </div>
                            <hr />
                            <p className="card-text text-muted">{props?.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCard
