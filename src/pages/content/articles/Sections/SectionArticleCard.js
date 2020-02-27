import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardBox from '../../../components/baseComponents/Cardbox/CardBox';
import articlesData from '../../../data/articlesData';


export default function SectionArticleCard() {
    return (
        <div>
            <Grid
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
                            handleClick={this.handleClick}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
