import './style.scss';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

import { Link } from 'react-router-dom';

import fitwork from '../../assets/image/projects/fitwork.png';
import searchprofile from '../../assets/image/projects/searchprofile.png';
import hangman from '../../assets/image/projects/hangman.png';
import converter from '../../assets/image/projects/converter.png';
import portefolio from '../../assets/image/projects/portefolio.png';
import weatherapp from '../../assets/image/projects/weatherapp.png';
import store from '../../assets/image/projects/store.png';

import { FaHeart } from 'react-icons/fa';

function Projects() {
  return (
    <div className="Projects">
    
    <h1 className='Projects-title'>My Projects</h1>

    <div className='Projects-list'>
        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
            <Card.Img variant="top" src={fitwork} alt='project-image' />
            <Card.Body>
            <Card.Title as={Link} to="https://fitwork-app.netlify.app/" className='Projects-card-title'># 1 Fit Work</Card.Title>
            <Card.Text className='Projects-card-text'>
                This project was realized in Team (5 people). I worked on the Frontend. This application is about the best practise at work to maintain a good health.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one" bg="primary">
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="primary">
                        Redux
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="dark">
                        Sass
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="dark">
                        Bootstrap
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        NodeJS
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        Sqitch
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="success">
                        PostgreSQL
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        Express
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        Heroku
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="danger">
                        eslint
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/fit-work-front">Got to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
            <Card.Img variant="top" src={searchprofile} alt='project-image'/>
            <Card.Body>
            <Card.Title as={Link} to="https://trouve-ton-profil-github.netlify.app/" className='Projects-card-title'># 2 GitHub Research</Card.Title>
            <Card.Text className='Projects-card-text'>
                This browser was created during my apprenticeship. It's about discovering ReactJS and the data fetch. You can research any GitHub profile with a key word.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Semantic UI
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="secondary">
                        API
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/Trouve-ton-profil-GitHub">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
            <Card.Img variant="top" src={converter} style={{ marginTop: '.5rem', width: "70%", height :"auto", alignSelf: "center"}} alt='project-image'/>
            <Card.Body>
            <Card.Title as={Link} to="/" className='Projects-card-title'># 3 Converter</Card.Title>
            <Card.Text className='Projects-card-text'>
                The converter permitted me to discover the OOP (Object Oriented Programming) with ReactJS. With this app, you can convert any avaiable currency. 
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="danger">
                        Prop-types
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="info">
                        POO
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/converter">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
            <Card.Img variant="top" src={portefolio} style={{ marginTop: '.5rem', width: "88%", height :"auto", alignSelf: "center"}} alt='project-image'/>
            <Card.Body>
            <Card.Title as={Link} to="/" className='Projects-card-title'># 4 My portfolio</Card.Title>
            <Card.Text className='Projects-card-text'>
                Yes, this Web App that you are currently visiting is my homemade portfolio. 
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Bootstrap
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Framer Motion
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="danger">
                        EmailJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="info">
                        <FaHeart />
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/my-portefolio">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
            <Card.Img variant="top" src={hangman} style={{ marginTop: '.5rem', width: "55%", height :"auto", alignSelf: "center"}} alt='project-image'/>
            <Card.Body>
            <Card.Title className='Projects-card-title'># 5 Hangman</Card.Title> 
            <Card.Text className='Projects-card-text'>
                This project has been done to discover TypeScript with ReactJS.
                It's the famous game "the hangman".
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        ReactJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="accent">
                        TypeScript
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Vite
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/hangman-ts">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
        <Card.Img variant="top" src={weatherapp} style={{ marginTop: '.5rem', width: "55%", height :"auto", alignSelf: "center"}} alt='project-image'/>
            <Card.Body>
            <Card.Title className='Projects-card-title'># 6 Weather App</Card.Title> 
            <Card.Text className='Projects-card-text'>
                With this app, I've discovered a new Framework: Angular. I've been using TypeScript and an external API to collect the weather information. 
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Angular
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="accent">
                        TypeScript
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        CSS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="info">
                        POO
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/weather-app">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
        <Card.Img variant="top" src={store} style={{ marginTop: '.5rem', width: "75%", height :"auto", alignSelf: "center"}} alt='project-image'/>
            <Card.Body>
            <Card.Title className='Projects-card-title'># 7 Online Store</Card.Title> 
            <Card.Text className='Projects-card-text'>
                In order to learn to use a secure payment tool, I've used the Stripe API in this project. I've build a fake online store with an external API. 
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        Angular
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="accent">
                        TypeScript
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Tailwind
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="info">
                        POO
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="danger">
                        Stripe
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        NodeJS
                    </Badge>
                    <Badge className="Projects-card-label-one" bg="secondary">
                        Express
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="secondary">
                        API
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/store-angular">Go to repository</Button>
            </Card.Body>
        </Card>

        <Card className='Projects-card' style={{ width: '18rem', height: '35rem' }}>
        <Card.Img variant="top"/>
            <Card.Body>
            <Card.Title className='Projects-card-title'># 8 Statistics</Card.Title> 
            <Card.Text className='Projects-card-text'>
                Here I am working on a Dashboard with the Youtube API and the RechartsJS library. Each visitor can visualize the Most Popular Videos of his zone.
                <span className='Projects-card-label'>
                    <Badge className="Projects-card-label-one"  bg="primary">
                        React
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="accent">
                        RechartsJS
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="dark">
                        Tailwind
                    </Badge>
                    <Badge className="Projects-card-label-one"  bg="secondary">
                        Youtube API
                    </Badge>
                </span>
            </Card.Text>
            <Button variant="primary" className="Projects-card-button" as={Link} to="https://github.com/LeaBani/statistics-with-recharts">Go to repository</Button>
            </Card.Body>
        </Card>

        </div>

    </div>
  );
}

export default Projects;
