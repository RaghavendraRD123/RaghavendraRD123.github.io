import { Button, Heading, Image } from "@chakra-ui/react"
import axios from "axios"


export const Resume = () =>{
const downloadfn = () =>{
    console.log('Download is working');
     
        // anchor link
         const element = document.createElement("a");
         element.href = "Raghavendra_RD_Resume.pdf" ;
         element.download = "Raghavendra_RD_Resume.pdf";
     
         // simulate link click
         document.body.appendChild(element); // Required for this to work in FireFox
         element.click();
     
}

    return <div>
            <a href="https://drive.google.com/drive/folders/1qqnk5OjLXZhI_bH9SLKtKWb00KyJ5aBq" target='_blank' >
                <button 
                onClick={downloadfn}
                style={{
                    marginTop : '20px',
                    backgroundColor : 'black',
                    padding:'20px 40px',
                    fontSize : '40px',
                    fontWeight : "bold",
                    fontFamily : 'cursive',
                    borderRadius : '20px',
                    boxShadow: '13px 13px white, -1em 0 .4em blue' ,
                    boxShadow: 'blue -20px 10px 100px 20px' ,
                    border : '5px solid blue'
                }}>
                Download
                </button>
            </a>
    </div>
}