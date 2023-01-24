import { Card, CardHeader, CardBody, CardFooter,Image, Box ,
    Stack, Heading ,Text, Button, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const Home = ({menu}) =>{
    const [textSize,setTextSize] = useState('');

  useEffect(()=>{
    const width = window.outerWidth;
    setTextSize( (width <= 768) ? '5xl' : '8xl' );
  },[])

  window.addEventListener('resize',()=>{
    const width = window.outerWidth;
    setTextSize( (width <= 768) ? '5xl' : '8xl'  );
  })
    return <Box display={'inline-block'} >
    <SimpleGrid marginTop='30px'
            columns={[1,1,1,1,2,2]}>
            <Image
                objectFit='cover'
                borderRadius='20%'
                width={menu ? "300px" : "500px"}
                _hover={{ w: menu ? "310px" : "510px" }} 
                transition="all 0.3s linear" 
                src='https://avatars.githubusercontent.com/u/107551502?v=4'
                alt='Profile Pic'
                margin='auto'
                />
        <div style={{
            display : 'grid',
            alignItems :'center'
        }}>
        <Box width={menu ? '300px':'700px'} >
        <Text
            bgGradient='linear(to-l, #7928CA, #FF0080)'
            bgClip='text'
            fontSize = {textSize}
            fontFamily='garamond'
            fontStyle='italic'
            fontWeight='extrabold'
          >
          Raghavendra RD
        </Text>
        <Text py='4' fontSize='3xl' fontWeight='bold'>Full Stack Web Developer</Text> 
        </Box>
        </div>
    </SimpleGrid>
    </Box>
}