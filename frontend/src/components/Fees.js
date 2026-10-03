import React from 'react'
import './fees.css';
export default function Fees() {
    return (
        <div className='fees'>
            <div className='heading'>
                <h2>Fees Collection</h2>
            </div>
            <div className='fees-coll'>
              <p>Collected</p>
              <p>Pending</p>
            </div>
            <div className='fees-coll'>
              <p className='collected'>rs</p>
              <p className='pending'>rs</p>
            </div>
        </div>
    )
}
