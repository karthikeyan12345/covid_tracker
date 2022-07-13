import React from 'react';

import {Grid,Card,Typography,CardContent} from '@material-ui/core';
import cx from 'classnames';

import styles from './Cards.module.css';

import CountUp from 'react-countup';


const Cards= ({data : {confirmed, recovered, deaths, lastUpdate}})=>
{
    if(!confirmed)
    {
        return 'LOADING..'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={ confirmed.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of Covid-19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                        <CountUp start={99999} end={recovered.value} duration={2} separator=","/>
                        </Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries from Covid-19</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.card,styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} duration={2} separator=","/></Typography>
                        <Typography color="textSecondary" >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of Deaths caused by Covid-19</Typography>

                    </CardContent>
                </Grid>

            </Grid>
            

        </div>
    );
}

export default Cards;