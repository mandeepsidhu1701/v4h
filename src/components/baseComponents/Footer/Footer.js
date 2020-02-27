import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core';


import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import './footer.css';

const styles = theme => ({
    root: {
       'color':'red'
      },
})

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

class Footer extends Component {
    render() {
        const { classes } = this.props;
        const preventDefault = event => event.preventDefault();
        return (
            <Grid container direction="row" justify="space-between" alignItems="center" className="footer" id="footer">
                <Grid item xs={1} md={2} sm={3}>
                    <Typography className="HCN">HCN</Typography>
                </Grid>
                <Grid item xs={10} md={8} sm={9}>
                    <Grid container direction="row" justify="flex-end">
                        <Grid item>
                            <Link href="#" onClick={preventDefault} className="footer-link">
                                Home
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" onClick={preventDefault} color="inherit" className="footer-link">
                                Intro
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" onClick={preventDefault} variant="body2" className="footer-link">
                                content
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" onClick={preventDefault} variant="body2" className="footer-link">
                                organize
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" onClick={preventDefault} variant="body2" className="footer-link">
                                contact
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={1} md={2} sm={0}>
                    <Link href="#" onClick="window.scrollTo({top: 0, behavior: 'smooth'})" className="footer-link">
                        go to top
                    </Link>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Footer)
