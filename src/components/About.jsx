import { Card, CardHeader, CardBody, CardFooter ,Text,Image,Heading, Stack, SimpleGrid, Box } from '@chakra-ui/react'

export const About = ({menu}) => {
    return <Box    display={"inline-block"}    >
      <SimpleGrid
    border='0px'
    gap='25px'
    overflow='hidden'
    columns={[1,1,1,1,2,2]}
    margin='auto'
  >
    <Box width={menu ? "300px" : "450px"} p='10px'  _hover={{ p : '0px' }} transition="all 0.8s linear" >
      <Image
        borderRadius='20px'
        w='100%'
        src='https://i.pinimg.com/originals/9c/fb/09/9cfb09f0c029e1f8c938208a7e278d76.gif'
        alt='About Image'
      />
    </Box>
      <Text width={menu ? "300px" : "500px"}  fontSize='20px' textAlign='left' mt='15px'>
        Writing application interface code via JavaScript , React JS and Chakra UI.<br/><br/>Proficient in translating designs into high-quality code.<br/><br/>Adept at monitoring & maintaining frontend performance.<br/><br/>Troubleshooting & debugging to improve overall performance with problem solving skills.<br/>
      </Text>
  </SimpleGrid>
    </Box>
}