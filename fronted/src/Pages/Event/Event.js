import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useEffect,useState } from 'react';
import  axios from 'axios'
 function Event() {
  const [allevents,setallevents]=useState([]);
  const getallEvents=async()=>{
    const { data } = await axios.get(
      "http://localhost:4000/api/event"
    );
    setallevents(data);
    console.log(data);
}
useEffect(()=>{
  getallEvents();
},[])

  return (
    <div className='w-100 d-flex flex-wrap'  >
    {
      allevents.map((event,index)=>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {event.EventTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
                  {event.EventDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
      )
 }
    </div>
  );
}
export default Event;