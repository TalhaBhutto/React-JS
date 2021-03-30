import React, { useEffect, useState } from 'react';

const Effect=()=>{
    const [num,SetNum]=useState(0);
    useEffect(
        document.title=`Clicked ${num} times`
    );
    return(<button onClick={()=>SetNum(num+1)}>Click Me {num}</button>
    );
}

export default  Effect;