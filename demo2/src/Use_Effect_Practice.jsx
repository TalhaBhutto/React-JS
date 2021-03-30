import React, { useState } from 'react';

const Effect=()=>{
    const [num,SetNum]=useState(0);
    const updteNum=()=>{
        SetNum(num+1);
    }
    return(<button onClick={updteNum}>Click Me {num}</button>
    );
}

export default  Effect;