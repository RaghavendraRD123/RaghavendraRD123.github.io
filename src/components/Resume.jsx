import { Button, Heading, Image } from "@chakra-ui/react"
import axios from "axios"


export const Resume = () =>{
const getResume = () =>{

}

    return <div>
        <a href="Raghavendra_RD_Resume.pdf" download='Raghavendra_RD_Resume.pdf' >
            <button style={{
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