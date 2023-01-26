import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import { Card, CardHeader, CardBody, CardFooter,Image, Box ,
         Stack, Heading ,Text, Button, SimpleGrid, Menu, MenuButton, MenuList, MenuItem,IconButton } from '@chakra-ui/react';
import { Projects } from './components/Projects';
import GitHubCalendar from 'react-github-calendar';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Resume } from './components/Resume';
import { useEffect, useRef, useState } from 'react';
import { Home } from './components/Home';
import { About } from './components/About';
import { HamburgerIcon } from '@chakra-ui/icons'
import { Navbar } from './components/Navbar';

function App() { 
const [sectionHt,setSectionHt] = useState('');
const [menu,setMenu] = useState('');
const [navbarHt,setNavbarHt] = useState('')

useEffect(()=>{
  const width = window.outerWidth;
  setSectionHt((width < 1280) ? '135px' : '100px' )
  setMenu((width < 768) ? true : false )
},[])

window.addEventListener('resize',(a)=>{
  if(window.outerWidth < 1280){
    setSectionHt('135px');
  }else{
    setSectionHt('100px');
  }
  if(window.outerWidth < 768){
    setMenu(true);
  }else{
    setMenu(false);
  }
})

const sectSyle = {
  paddingTop:sectionHt,
}

const sectHead = {
  as : 'h1',
  size:'3xl'
}

const githubSect = {
  ...sectHead, 
  marginBottom  :  '20px ',
  paddingTop : '50px',
  color  :  'blueviolet',
  size : '2xl'
}

  return (
    <div className="App" style={{margin:'auto'}}>
      <Box id='header' >
        <a href='#Home'>
        <Text
                          color='#ff4ffa'
                          fontSize = '35px'
                          fontFamily='garamond'
                          fontStyle='italic'
                          fontWeight='extrabold'
                          // textAlign="left" 
                        >
                        Raghavendra
          </Text>
        </a>
          <Navbar menu={menu} />
        </Box>
        <div>
          <section className='sections' style={sectSyle} id='Home'>
            <Home menu={menu} />
          </section>
          {/* <section  className='sections' style={sectSyle} id='Calender'></section> */}
          <section  className='sections' style={sectSyle} id='About' >
            <Heading {...sectHead}>About Me</Heading>
            <About menu={menu} />
          </section>
          <section  className='sections' style={sectSyle} id='Skills'>
            <Heading {...sectHead} >Skills</Heading>
            <TechStack menu={menu} />
            <Box >
              <Heading {...githubSect}>Github Stats</Heading>
              <Image width={menu?'80%':'650px'} margin='auto' src='https://github-readme-stats.vercel.app/api?username=RaghavendraRD123&theme=radical' />
              <Heading {...githubSect}>GitHub Calendar</Heading>
                <GitHubCalendar style={{
                  width : menu ? "96%" : "98%" ,
                  margin : 'auto',
                }} username="raghavendrard123" />
            </Box>
          </section>
          <section  className='sections' style={sectSyle} id='Project'>
            <Heading {...sectHead}>Project</Heading>
            <div>
              <Projects ProWidth={menu?'80%':"70%"} menu={menu} />
            </div>
          </section>
          <section  className='sections' style={sectSyle} id='Contact'>
            <Heading {...sectHead}>Contact</Heading>
            <Contact />
          </section>
          <Image zIndex='-2' position='absolute' width='100%'  margin='center' marginTop='40px' src ='https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif' />
          <section  style={{
              color : 'white' ,
              paddingTop : sectionHt,
            }}  
            className='sections'id='Resume'>
            <Heading {...sectHead} style={{
              color : 'white'
            }}>Resume</Heading>
            <Resume />
          </section>
       </div>
    </div>
  );
}

export default App;
