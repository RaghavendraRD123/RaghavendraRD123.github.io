import { ProjectItem } from './ProjectItem';
import { Box , SimpleGrid} from '@chakra-ui/react';
import { useState } from 'react';

const ProArr = [
{img:'https://user-images.githubusercontent.com/104342116/213980455-c8c6e7a5-3e17-4e40-bee0-0e211a835752.png',
title:'Nykaa Clone',
desc:" Nykaa Clone offers a well curated comprehensive selection of makeup, skincare, haircare, bath and body, fragrance, grooming appliances, personal care, and health",
Tech:["Mongodb","Mongoose",'Chakra UI','React'],
git:'https://github.com/Saurav02022/prickly-example-4760',
deploy:"https://nykaa-clone-chi.vercel.app/"
},
{img:"CrickInfo/Screenshot_1.png",
title:'Cricket Info Online ',
desc:'Cricket Info Online is a sports news website exclusively for thegame of cricket & the site features news, articles, live coverage ofcricket matches',
Tech:['React','JavaScript','HTML','CSS'],
git:'https://github.com/SudhanshuRoy/Cricinfo-clone',
deploy:'https://cricket-info-online.netlify.app/'
},
{img:"TravelMojo/Screenshot_1.png",
title:'Travel Mojo',
desc:'The website can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.',
Tech:['Chakra UI','React','HTML','CSS'],
git:'https://github.com/Preetibildani/average-pig-3056',
deploy:"https://average-pig-3056.vercel.app/"
},
{img:"MailTrap/Screenshot_2.png",
title:'Mail Trap Online ',
desc:'Mail Trap Online is a test mail server solution that allows testing email notifications without sending them to the real users of your application.',
Tech:['Chakra UI','React','HTML','CSS'],
git:'https://github.com/RaghavendraRD123/willing-collar-6727',
deploy:'https://mailtraponline.netlify.app/'
},
]

export const Projects = ({ProWidth,menu}) => {
    const breakpoints = {
        sm: '1',
        md: '1',
        lg: '3',
        xl: '3',
        '2xl': '5',
      }
      const [w,setW] = useState(breakpoints);

return <Box  display={"inline-block"}>
    <SimpleGrid margin='10px' gap='30px' >
        {
            ProArr.map((el,i)=>{
                return <ProjectItem key={i} {...el} menu={menu} />
            })
        }
    </SimpleGrid>
</Box>
}