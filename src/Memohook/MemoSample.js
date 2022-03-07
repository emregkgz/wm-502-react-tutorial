import React, { useMemo } from 'react'

function MemoSample() {

    console.log('Memo component render!!');


    return (
        <div>
            
        </div>
    )
}

export default React.memo(MemoSample)
