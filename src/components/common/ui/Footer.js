import React, { Component } from 'react'
import { Typography } from '@material-ui/core';


import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import './footer.css';


const styles = theme => ({
    root: {
       'color':'red'
      },
})

class Footer extends Component {
   
 
    render() {
       
        const { classes } = this.props;
        const preventDefault = event => event.preventDefault();
        return (
            <div>
                
                <Typography className="outer">
                    <Link href="#" onClick={preventDefault} className="footer-link">
                        Link
                      </Link>
                    <Link href="#" onClick={preventDefault} color="inherit" className="footer-link">
                        {'color="inherit"'}
                    </Link>
                    <Link href="#" onClick={preventDefault} variant="body2" className="footer-link">
                        {'variant="body2"'}
                    </Link>
                </Typography>
         
            </div>
        )
    }
}

export default withStyles(styles)(Footer)
