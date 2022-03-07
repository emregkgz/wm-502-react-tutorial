import React, { useState } from 'react'
import { baseManager } from '../service/baseService';

function FetchPostSample() {


    const [categoryName, setCategoryName] = useState('');
    const [description, setDescription] = useState('');


    const addCategory = () => {

        let newCategory = {
            name: categoryName,
            description: description
        }

        baseManager.add('/categories', newCategory).then((res) => {
            console.log(res);
        })

    }

    return (
        <>
            <div>
                <input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}></input>
            </div>
            <div>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <div>
                <button onClick={() => addCategory()}>Add</button>
            </div>
           

        </>
    )
}

export default FetchPostSample
