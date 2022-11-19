import React from 'react'
import "./Home.css";
// import harryPotter from "./images/HarryPotterAndThePhilosopherStone.jpg"
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className='container'>
      <div className='rec-container'>

        <h1>Recommended Books!</h1>

        <div className='card-container'>
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" className='card-img' height="300" image={harryPotter} alt="Harry Potter"/>
            <CardContent>
              <Typography variant="h5" component="div" className='typography'>
                Harry Potter and The Philosophers Stone
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, 
              Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated 
              by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus 
              Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft 
              and Wizardry. An incredible adventure is about to begin!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card> */}
        </div>

      </div>

      <div className='discount-container'>

        <h1>Discouted Books!</h1>

        <div className='card-container'>
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" className='card-img' height="300"  image={harryPotter} alt="Harry Potter"/>
            <CardContent>
              <Typography variant="h5" component="div" className='typography'>
                Harry Potter and The Philosophers Stone
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, 
              Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated 
              by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus 
              Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft 
              and Wizardry. An incredible adventure is about to begin!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card> */}
        </div>

      </div>

      <div className='holiday-container'>
        
        <h1>Holiday Books!</h1>

        <div className='card-container'>
          {/* <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" className='card-img' height="300"  image={harryPotter} alt="Harry Potter"/>
            <CardContent>
              <Typography variant="h5" component="div" className='typography'>
                Harry Potter and The Philosophers Stone
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, 
              Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated 
              by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus 
              Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft 
              and Wizardry. An incredible adventure is about to begin!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card> */}
        </div>

      </div>
    </div>
  )
}

export default Home