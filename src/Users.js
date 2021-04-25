
import { observe } from 'mobx';
import React, { Component } from 'react'
import counter from "./Store/counter";
import {observer} from "mobx-react-lite";

 export const Users = observer( () => {
    
        return (    
            <div  style={{paddingTop: '10px'}} align="center">
                {"count =" + counter.count }
                <div className='buttons' >
                    <button onClick={() => counter.increment()}> + </button>
                    <button onClick={() => counter.decrement()}> - </button>
                </div>
            </div>

        )
    
})

