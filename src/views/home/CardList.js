import React from 'react';
import Card from '../../components/Card';
import { card_arr } from '../../assets/data/card_data';


function CardList() {
    return (
        <div className='row mt-5'>
            {
                card_arr.length !== 0 && card_arr.map((items, index) => {
                    return (
                        <div className='col-sm-3 col-12' key={index}>
                            <Card {...items} key={index} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default CardList;
