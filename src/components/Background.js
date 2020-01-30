import React from 'react';

function Background(props){
    const defaultBgImg = "/images/matt-hardy-562566-unsplash@2x.png";

    const bgSectionStyle = {
        position:"fixed",
        top:0,
        left:0,
        zIndex:-1,
        width:"100%",
        height:"100vh",
    }
    
    const bgDivStyle = {
        position:"absolute",
        top:0,
        left:0,
        width:"100%",
        height:"100%",
    
        content:"",
        zIndex : 5,
        backgroundColor : "rgba(0,0,0,.5)",
    }
    
    const bgImgStyle = {
      position:"absolute",
      top:"0",
      left:"0",
      width:"100%",
      minWidth:"100%",
      height:"100%",
      minHeight:"100%",
    }
    return  <section style={bgSectionStyle}>
                <div className={bgDivStyle}>
                    <img src={props.bgImage ? props.bgImage : defaultBgImg } style={bgImgStyle}></img>
                </div>
            </section>;
}

export default Background