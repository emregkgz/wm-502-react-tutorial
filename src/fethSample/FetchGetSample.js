import React, { useEffect, useState } from 'react'
import { baseManager } from '../service/baseService'

function FetchGetSample() {

    //https://northwind.vercel.app/api/categories dataları çek ul li içerisine categoryName yazdır

    const [categories, setCategories] = useState([])


    useEffect(() => {

        baseManager.get('/categories').then((data) => {
            setCategories(data);
        })
        //    var result = await baseManager.get();
        //    setCategories(result);
    })


    return (
        <>
            <ul>
                {
                    categories && categories.map((item, key) => {
                        return (<li>{item.name}</li>)
                    })
                }
            </ul>
        </>
    )
}

export default FetchGetSample
