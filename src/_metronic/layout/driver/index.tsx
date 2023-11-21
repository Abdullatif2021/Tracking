import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export function DriverLayout() {
    const dispatch = useDispatch();
    const loading = useSelector((state: any) => state.currentUserLaravel?.loading);
    const currentUser = useSelector((state: any) => state.currentUserLaravel?.currentUser);
    useEffect(() => {
      
    }


        , []);

    useEffect(() => {
   
    }

        , [loading]);
    return (
        <div style={{
            textAlign: 'center',
            margin: 'auto',
            fontSize: '40px'
        }}>
            Hi Mehya
        </div>
    )
}


