import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardActions, Button } from '@mui/material';

function AllTrains() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
  
    const sampleData = [
      {
        id: 1,
        name: 'Express Train 1',
        delay: 10,
        price: 50,
        seatAvailability: 'High',
        coachClass: 'First Class',
      },
      {
        id: 2,
        name: 'Local Train 1',
        delay: 5,
        price: 20,
        seatAvailability: 'Low',
        coachClass: 'Economy',
      },
    ];
    setTrains(sampleData);
  }, []);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        All Trains
      </Typography>
      {trains.map(train => (
        <Card key={train.id} variant="outlined" style={{ marginBottom: '20px' }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {train.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Delay: {train.delay} minutes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${train.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Seat Availability: {train.seatAvailability}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Coach Class: {train.coachClass}
            </Typography>
          </CardContent>
          <CardActions>
            <Button component={Link} to={`/train/${train.id}`} size="small">
              View Details
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default AllTrains;
