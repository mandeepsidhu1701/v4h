import React from 'react'
import { Checkbox } from '@material-ui/core';

function NavBar(props){
    return <div style={{paddingTop : 30, paddingBottom : 30}}>
            <span style={{fontSize : 20, color : '#FFFFFF', fontWeight : 'bold', paddingRight : 60}}> Quotes &gt;&gt; Person </span>
            <span style={{fontSize : 14, color : '#FFFFFF', fontWeight : 'bold'}}><Checkbox onClick={props.goExpanded}/>Expand</span>
          </div>
}

export default NavBar