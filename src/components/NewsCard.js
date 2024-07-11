import React from 'react'
import { Box, Card, CardContent, Typography, CardMedia } from '@mui/material'

function NewsCard({data}) {
    console.log(data)
  return (
    <div>
      <Box>
        <Card>
            <CardMedia
            component="img"
            height="200"
            image={data.urlToImage            }
            >
            </CardMedia>
           <CardContent>
            <Typography sx={{fontWeight: "bold"}}>
                   {data.title}
            </Typography>
           </CardContent>
        </Card>
      </Box>
    </div>
  )
}

export default NewsCard
