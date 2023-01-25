import { Card, CardHeader, CardBody, CardFooter , Image ,
  Stack ,Heading ,Text,Divider,ButtonGroup,Button,Box, SimpleGrid, grid, Menu } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';

export const ProjectItem = ({img,title,desc,Tech,git,deploy,menu}) => {    
  const [vert,setVert] = useState('');

  useEffect(()=>{
    const width = window.outerWidth;
    setVert( (width <= 900) ? true : false );
  },[])

  window.addEventListener('resize',()=>{
    const width = window.outerWidth;
    setVert( (width <= 900) ? true : false );
  })

   return <SimpleGrid
            bg='rgb(25 26 27)'
            _hover={{
              bg : 'black',
              boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px"      
            }}

            transition="all 0.8s linear"
            p = '20px'
            border = '2px solid #87888d'
           style={{
            borderRadius : '20px',
            gap : '30px',
            display : (vert)? "grid" : "flex"
          }}>
            <Box style={{
                display : 'flex',
                overflow : 'hidden',
                alignItems : 'center'
            }}>
              <Image 
              _hover={{
                boxShadow : "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                w : (menu) ? "270px" : "420px",
                height : (menu) ? "180px" : "270px",
              }}
              transition="all 1s linear"
              src={img} 
              width = {(menu) ? "250px" : "400px" }
              height = {(menu) ? "160px" : "250px"} 
              alt='Project Image' style={{
                borderRadius : '30px',
                margin :'auto'
              }} />
            </Box>
            <Box width={menu ? "250px" : "450px"} >
              <br />
              <Heading size='md'>{title}</Heading>
              <br />
              <Text textAlign='left'>{desc}</Text>
              <br />
              <p style={{ textAlign:'left'}}><i style={{
                   color : 'blue',
                   fontSize: '20px'
                }}>Tech Stacks : </i> {Tech.join(' , ')}</p>
              <br />
              <Box display='flex' justifyContent='space-around'  >
                  <a target='_blank' href={deploy}><Image _hover={{w:'45px'}} transition="all 0.5s linear" borderRadius='50%' width='35px' src ='https://i.pinimg.com/736x/64/67/6a/64676a02251b2865ceef4f07031a39c7.jpg' /></a>
                  <a target='_blank' href={git}><Image _hover={{w:'45px'}} transition="all 0.5s linear"  borderRadius='50%'  width='35px' src='https://i.pinimg.com/736x/b3/7b/05/b37b05a713d8eebcbb475119e587859b.jpg' /></a>
                </Box>
            </Box>
          </SimpleGrid>

}