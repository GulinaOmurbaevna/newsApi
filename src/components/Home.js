import React, { useEffect } from 'react'
import { useState } from 'react'
import NewsCard from './NewsCard'
import { Grid } from '@mui/material'
function Home() {
    const [news,setNews] = useState([])
    const getNews = () => {

        fetch("https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=188de74f271a477e91ff64679b8db821")
        .then(res => res.json())
        .then(json => setNews(json.articles))
    }

    useEffect(() => {
        getNews()
    }, [])
 
  return (
    <div>
        <Grid container spacing={2}> 
        {news.map((data) => (  
            <Grid item xs={3}>
           <NewsCard data={data}/>
           </Grid>
        ))}
        </Grid>
    </div>
  )
}

export default Home
