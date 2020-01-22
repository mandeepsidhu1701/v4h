import React, {useState} from 'react'
import { Card, CardMedia, Typography, Link, CardContent } from '@material-ui/core';

function ShadableCard(props){
    const [shaded, setShaded] = useState('none');
    const {item, goDetail} = props;

    return <Link href="#" onClick={goDetail} onMouseOver={() => setShaded('block')} onMouseOut={() => setShaded('none')}>
        <Card square={true}>
        <div style={{display: 'block', position: 'relative'}}>
            <CardMedia alt='picture' style={{paddingTop : '60%'}} image={item.image}></CardMedia>
                <div id="cardShader" style={{position: 'absolute', backgroundColor: 'rgba(77, 77, 77, 0.4)', top: 0, bottom: 0, left: 0, right: 0, display: shaded}}>
                <CardContent>
                    <Typography align='center' style={{color : '#ffffff', fontWeight : "bold", fontSize : 18, fontFamily : 'Verdana', marginTop : 40, marginBottom : 25}}>
                        {item.title}
                    </Typography>
                    <Typography gutterBottom align='center' fontWeight='bold' style={{color : '#ffffff'}}>
                        <div dangerouslySetInnerHTML={{ __html: item.content}}></div>
                    </Typography>
                </CardContent>
            </div>
        </div>
        </Card>
    </Link>
}

export default ShadableCard