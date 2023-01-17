import {Heading, SimpleGrid,Image, Box} from '@chakra-ui/react';

const imgArr = [
    // {
    //     img:``,
    //     name: ''
    // },
    {
        img:`https://i.pinimg.com/236x/45/65/47/456547b6c4be00cb4ec22fb75bf9954e.jpg`,
        name: 'HTML'
    },
    {
        img:`https://i.pinimg.com/236x/3f/83/9a/3f839a4a5688116dfb5f9f81eaa8d067.jpg`,
        name: 'CSS'
    },
    {
        // img:`https://i.pinimg.com/236x/12/ba/c6/12bac607c472dfee8483d057e8515ec2.jpg`,
        img:'https://i.pinimg.com/236x/5a/10/dc/5a10dc26f67f4217c22136dbd69dbc47.jpg',
        name: 'Java Script'
    },
    {
        img:`https://i.pinimg.com/236x/01/81/d4/0181d4bdd9c2c87c856ea5b97e32fc63.jpg`,
        name: 'VS Code'
    },
    {
        img: `https://i.pinimg.com/236x/f5/b9/91/f5b9918f76b778e799b6aa54c270061e.jpg` ,
        name: 'React'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIJwc_Q-Xko-zK_-HSlB4l7gIdSjBwGYsat2xX9JZk8MNi3JTbcv75vohka5cifpVegw&usqp=CAU',
        name: 'Chakra ui'
    },
    {
        img:`https://i.pinimg.com/236x/61/fe/3c/61fe3c7650b94615d83d5de02de68b76.jpg`,
        name: 'Github'
    },
    {
        img:`https://i.pinimg.com/236x/95/e1/78/95e178f5b1dc1a2327595784442a866c.jpg`,
        name: 'Netlify'
    },
    // {
    //     img:`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAVFBMVEUAAAD////Pz8/Z2dn8/PyHh4eoqKj39/f09PRcXFzf39/x8fEXFxdzc3MeHh5HR0e8vLwmJibo6OhMTEzDw8OhoaEsLCwQEBBqamplZWU6OjqPj4/ld+a7AAABRklEQVRoge3YW5KCMBCFYXsIdxUNV3X/+xwRI05IBq1KNy/n28BfUrTHcrcDAAAAAAAAANhcP/SbdAd12aQbUbRFNiZFsXx2r4lI78W7CY0S6ew1fXTTq3C3oUkjm83vL9VIUS7aLV7dQjJ7oNlBLnss56wqj2Ld5PmUpyctdktVRu+ySqh7or9OMtmBbDKvVrToiuxSvMiSxC6dtaOrz+zd1pElarmzderspty31Lx9ZcwU9y7lzk874t2lwttl3aXY+ZQnjLd03yFfVxHjLrX+j6sU3y1V7hsy2G7J3iEb0y75b8jguaXlDtlYdsm1QzaGW+pcO2TTXfBu8s9XhsHwG6/OVqujrA7cbdabD4F3af2GzKMOe0v+HbIF3aXbBy+VcQuX7cv13EsZ7t+l5ItswP8eup/vhP/yAAAAAAAAAAAAAE6/cKgJruXw/ucAAAAASUVORK5CYII=`,
    //     name: 'Vercel'
    // },
]

export const TechStack = ({menu}) => {
    return <Box display={"inline-block"} >
        <SimpleGrid gap='20px' columns={[2,3,4,4,6,6]} >
        {
            imgArr.map((el,i)=>{
                return <Box key={i} border="1px solid white" borderRadius={"15px"} padding="17px 12px 12px 12px" >
                  <Image
                    margin='auto'
                    overflow='hidden'
                    src= {el.img}
                    alt={el.name}
                    borderRadius='lg'
                    width='100px'
                  />
                    <Heading width="120px" marginTop='20px' size='md'>{el.name}</Heading>  
              </Box>
            })
        }
    </SimpleGrid>
    </Box>
}