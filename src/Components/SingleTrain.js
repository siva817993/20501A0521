import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Card, CardContent } from '@mui/material';

function SingleTrain() {
  const { id } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
  
    const sampleData = {
      id: 1,
      name: 'Express Train 1',
      delay: 10,
      price: 50,
      seatAvailability: 'High',
      coachClass: 'First Class',
    };
    setTrain(sampleData);
  }, [id]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        {train.name} Details
      </Typography>
      <Card variant="outlined">
        <CardContent>
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
      </Card>
    </div>
  );
}

export default SingleTrain;
