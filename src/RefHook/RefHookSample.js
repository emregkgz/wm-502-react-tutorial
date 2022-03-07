import React, { useRef } from 'react'

function RefHookSample() {

    const helloSpan = useRef(null);
    
    const changeColor = () => {

        // document.getElementById("hello").style.backgroundColor = 'tomato';
        helloSpan.current.style.backgroundColor = 'tomato'
    }

    return (
        <>
            <span ref={helloSpan}>Hello Ref Hook</span>
            <button onClick={() => changeColor()}>Change Color</button>
        </>
    )
}

export default RefHookSample
