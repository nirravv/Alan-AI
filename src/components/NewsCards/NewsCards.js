import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import {Grid, Grow, Typography} from '@material-ui/core';
import useStyles from './NewsCardsCss.js';

const infoCards = [
    { color: '#00838f', title: 'How To Use', info: 'Once you open the news section you can tell alan to read the news headlines by just saying yes or no if you do not want it to. And you can open the perticular news by saying open the article number (and the number of that article) or just say go back to come to home page!' ,text: 'What can i do here?' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'Wired, BBC News, IGN, Buzzfeed, ABC News...', text: 'Give me the news from BBC News' },
];

function NewsCards({ articles, activeArticle }) {
    const classes = useStyles();

    if(!articles.length) {
        return (
        <Grow in>  
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {infoCards.map((infoCard) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                        <div className={classes.card} style={{ backgroundColor: infoCard.color}}>
                            <Typography variant="h5">{infoCard.title}</Typography>
                        { infoCard.info 
                        ? (<Typography className={classes.description} variant="h6"><strong>{infoCard.title.split(' ')[2]}:</strong><br/>{infoCard.info}</Typography>) : null}
                        <Typography className={classes.description} variant="h6">Try Saying: <br/> <i>{infoCard.text}</i></Typography>
                        </div>
                     </Grid>
                ))}
            </Grid>
        </Grow>
        )
    }
    return (
        <Grow in> 
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles.map((article, i) => (
                <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
                    <NewsCard article={article} activeArticle={activeArticle} i={i} />
                </Grid>
            ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards
