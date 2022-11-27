import logo from './logo.svg';
import './App.css';
import './Navbar.css';
import { Card, CardHeader, CardBody, CardFooter,Image, Stack, Heading ,Text, Button } from '@chakra-ui/react';

function App() {
  return (
    <div className="App" >
      <header id='header' >
        <div className='container' >
          <nav className='main-nav'> 
            <a className='normalLink' href='#Home' >Home</a>
            <a className='normalLink' href='#About' >About Me</a>
            <a className='normalLink' href='#Skills' >Skills</a>
            <a className='normalLink' href='#Project' >Project</a>
            <a className='normalLink' href='#Contact' >Contact</a>
            <a className='normalLink' href='#Resume' >Resume</a>
          </nav>
        </div>
      </header>
        <div>
          <section className='sections' id='Home'>
            <h1>Home</h1>
            <div>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                style={{
                  color:'white',
                  width:'90%',
                  margin:'auto'
                }}
              >
                <Image
                  objectFit='cover'
                  maxW={{ base: '100%', sm: '200px' }}
                  src='https://avatars.githubusercontent.com/u/107551502?v=4'
                  alt='Profile Pic'
                />

                <Stack>
                  <CardBody>
                    <Heading size='md'>Raghavendra RD</Heading>

                    <Text py='2'>
                    Proficient in translating designs  into high-quality code. Troubleshooting & debugging to improve overall performance with problem solving skills.
                    </Text>
                  </CardBody>

                  <CardFooter>
                    <Button variant='solid' colorScheme='blue'>
                      More info
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </div>
          </section>
          <section  className='sections'id='About'>
            <h1>About Me</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in 
              a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard 
                McClintock, a Latin professor at Hampden-Sydney 
                College in Virginia, looked up one of the more ob
                scure Latin words, consectetur, from a Lorem Ipsum 
            </p>
          </section>
          <section  className='sections'id='Skills'>
            <h1>Skills</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in 
              a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard 
                McClintock, a Latin professor at Hampden-Sydney 
                College in Virginia, looked up one of the more ob
                scure Latin words, consectetur, from a Lorem Ipsum 
            </p>
          </section>
          <section  className='sections'id='Project'>
            <h1>Project</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in 
              a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard 
                McClintock, a Latin professor at Hampden-Sydney 
                College in Virginia, looked up one of the more ob
                scure Latin words, consectetur, from a Lorem Ipsum 
            </p>
          </section>
          <section  className='sections'id='Contact'>
            <h1>Contact</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in 
              a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard 
                McClintock, a Latin professor at Hampden-Sydney 
                College in Virginia, looked up one of the more ob
                scure Latin words, consectetur, from a Lorem Ipsum 
            </p>
          </section>
          <section  className='sections'id='Resume'>
            <h1>Resume</h1>
            <p>Contrary to popular belief, Lorem Ipsum is not
              simply random text. It has roots in 
              a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard 
                McClintock, a Latin professor at Hampden-Sydney 
                College in Virginia, looked up one of the more ob
                scure Latin words, consectetur, from a Lorem Ipsum 
            </p>
          </section>
       </div>
    </div>
  );
}

export default App;
