import { ProjectItem } from './ProjectItem';
import { Box , SimpleGrid} from '@chakra-ui/react';
import { useState } from 'react';

const ProArr = [
{img:'https://i.pinimg.com/236x/89/87/02/898702f2255a15653d1107b7f64e12f0.jpg',
title:'Mail Trap Online ',
desc:'Mail Trap Online is a test mail server solution that allows testing email notifications without sending them to the real users of your application.',
Tech:['Chakra UI','React','HTML','CSS'],
git:'https://github.com/RaghavendraRD123/willing-collar-6727',
deploy:'https://mailtraponline.netlify.app/'
},
{img:`https://i.pinimg.com/564x/23/b4/32/23b43223c7492f9c88f5465de4db8801.jpg`,
title:'Cricket Info Online ',
desc:'Cricket Info Online is a sports news website exclusively for thegame of cricket & the site features news, articles, live coverage ofcricket matches',
Tech:['React','JavaScript','HTML','CSS'],
git:'https://github.com/SudhanshuRoy/Cricinfo-clone',
deploy:'https://cricket-info-online.netlify.app/'
},
{img:'https://i.pinimg.com/564x/20/b6/db/20b6db274c66ee436c13c656bfe4b41a.jpg',
title:'Travel Mojo',
desc:'The website can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.',
Tech:['Chakra UI','React','HTML','CSS'],
git:'https://github.com/Preetibildani/average-pig-3056',
deploy:"https://average-pig-3056.vercel.app/"
},
// {img:'data:image/png;base64,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',
// title:'Cricket Info Online ',
// desc:'Cricket Info Online is a sports news website exclusively for thegame of cricket & the site features news, articles, live coverage ofcricket matches',
// Tech:['React','JavaScript','HTML','CSS'],
// git:'https://github.com/SudhanshuRoy/Cricinfo-clone',
// deploy:'https://cricket-info-online.netlify.app/'
// },
// {img:'https://mailtrap.io/wp-content/uploads/2021/05/mailtrap_home-2.png',
// title:'Mail Trap Online ',
// desc:'Mail Trap Online is a test mail server solution that allows testing email notifications without sending them to the real users of your application.',
// Tech:['Chakra UI','React','HTML','CSS'],
// git:'https://github.com/RaghavendraRD123/willing-collar-6727',
// deploy:'https://mailtraponline.netlify.app/'
// }
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