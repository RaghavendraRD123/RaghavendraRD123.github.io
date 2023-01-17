import { Button, Card,Link, CardBody, CardFooter, Text , CardHeader, Heading, SimpleGrid, Icon, MenuDivider } from "@chakra-ui/react"
import '../App.css';
import { MdMailOutline, MdPhone } from "react-icons/md";
import { FaGithub,FaGlobe, FaMailBulk, FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Contact = () => {
const [dot,setDot] = useState('')

    useEffect(()=>{
        const width = window.outerWidth;
        setDot((width < 600) ? true : false )
      },[])
      
      window.addEventListener('resize',(a)=>{
        if(window.outerWidth < 600){
          setDot(true);
        }else{
          setDot(false);
        }
      })

    const heading = {
        size : (dot) ? 'xs' : 'lg',
        as : 'h2',
        padding : '10px 0px 10px 0px'
    }
    return <SimpleGrid id='contactGrid' className="div" style={{
        display : 'inline-block',
        gridTemplateColumns : '1fr 1fr' ,
        textAlign : 'left'
    }} >
                <pre>   
                    <Heading {...heading} ><Icon as={MdMailOutline} boxSize={6} /> 
                    { dot ? <br/> : ' : '}
                    raghavendrardeshabhandari@gmail.com</Heading>
                    <br/>
                </pre>
                <pre>
                    <Link href={`https://github.com/RaghavendraRD123`}  isExternal ><Heading {...heading} ><Icon as={FaGithub} boxSize={6} /> 
                    { dot ? <br/> : ' : '}
                    https://github.com/RaghavendraRD123</Heading></Link>
                    <br/>
                </pre>
                <pre> 
                    <Heading {...heading} ><Icon as={FaPhoneAlt} boxSize={6} /> 
                    { dot ? <br/> : ' : '}
                    +91 6360314769</Heading>  
                    <br/> 
                </pre>
            </SimpleGrid>
}