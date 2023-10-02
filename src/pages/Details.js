import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import JewelDetails from '../Shop-components/JewelDetails'


export const Details = () => {
    const { id } = useParams();
    const url = "http://localhost:3000/shop/" + id;
    const { data: jewel, isLoading, error } = useFetch(url)
    return (
        <div>
            {isLoading && <div ><i className="fa-solid fa-spinner fa-spin"></i>Loading...</div>}
            {error && <div>{error}</div>}
            {
                jewel && (
                    <>
                        <JewelDetails key={jewel.id} jewel={jewel} />
                    </>
                )
            }
        </div>
    )
}
