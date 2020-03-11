import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import CardBox from '../../../../components/ui/CardBox/CardBox';
import articlesData from '../../../../data/articlesData';

export default function SectionArticleCard() {
    return <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
            >
                {articlesData.map((card, i) => (
                    <Grid item xs={12} sm={6} md={3} key={i}>
                        <CardBox
                            id={card.id}
                            image={card.image}
                            title={card.title}
                            content={card.content}
                            topbtntext={card.topbtntext}
                            bottombtntext={card.bottombtntext}
                            handleClick={() => {}}
                        />
                    </Grid>
                ))}
            </Grid>
}
