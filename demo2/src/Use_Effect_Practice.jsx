import React, { useState } from 'react';

const Effect=()=>{
    const [num,SetNum]=useState();
    return(<button onClick={SetNum(num+1)}>Click Me {num}</button>
    );
}

export default  Effect;