import {useState} from 'react';

function Tabs(){

    const[index, setIndex]=useState(0);
return (

    <div className='container'>
        <div className='block-tabs'>
           <div className={`tabs ${index===0?'tabs-active':null}`} onClick={() =>{setIndex(0)}}> 
           Tab 1
           </div>
           <div className={`tabs ${index===1?'tabs-active':null}`} onClick={() =>{setIndex(1)}}>
               Tab 2
            </div>
           <div className={`tabs ${index===2?'tabs-active':null}`} onClick={() =>{setIndex(2)}}>
               Tab 3
            </div> 
        </div>

        <div className='content-tabs'>
            <div hidden={index !=0}>
               <p>Tab 1 content is showing here.</p> 
            </div>
            <div hidden={index !=1}>
               <p>Tab 2 content is showing here.</p> 
            </div>
            <div hidden={index !=2}>
               <p>Tab 3 content is showing here.</p> 
            </div>
        </div>
    </div>
);


}


export default Tabs;