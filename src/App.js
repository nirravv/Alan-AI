import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';

const alanKey = 'a7085c538a4b54b160fb025b39e7425f2e956eca572e1d8b807a3e2338fdd0dc/stage';
function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();


  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if(command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        }
        else if(command === 'highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1 )
        }
        else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }

      }

    })
  },[])

  return ( 
    <div className="app">
      <div className={classes.logoContainer}>
        <h1 className={classes.title}> Welcome to Alan AI Project</h1>
      </div>
     <NewsCards articles={newsArticles} activeArticle={activeArticle}/>
    </div>
  );
}

export default App;
