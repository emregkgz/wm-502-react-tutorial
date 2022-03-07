import React, { useState } from 'react'

function StateSample() {

    const [sayac, setSayac] = useState(0)

    return (
        <>
            <span>{sayac}</span> 
            <button onClick={() => setSayac(5)}>Set Sayac</button>
        </>
    )
}

export default StateSample
