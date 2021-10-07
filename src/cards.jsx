import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import img from "./image/b2.jpg"

const cards = (props) => {
    return (
        <>
     <Card sx={{ maxWidth: 345 }}    className="mr-2">
      <CardActionArea >
        <CardMedia
        
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href="https://www.youtube.com/watch?v=Bwbfz8gky08" blank>Click Now</a>
        </Button>
      </CardActions>
    </Card>
            
        </>
    )
}

export default cards
