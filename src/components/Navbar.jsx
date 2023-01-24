import { HamburgerIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList, SimpleGrid, Text, Box } from "@chakra-ui/react"

export const Navbar = ({menu}) => {

  const menuStyle = {
    width:'100%'
  }

return <div className='container' >
        {
          menu ? 
            <Box display={"flex"} justifyContent='end' >
              <Menu>
                  <MenuButton style={{
                    border:'2px solid white',
                    display:'flex',
                    padding :'10px',
                }}><HamburgerIcon/></MenuButton>
                <MenuList bg='black'>
                  <MenuItem bg='balck' >
                    <a className='normalLink'  href='#Home' style={menuStyle} >Home</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#About' style={menuStyle}>AboutMe</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#Skills' style={menuStyle}>Skills</a>
                  </MenuItem>
                  <MenuItem bg='black' >
                    <a className='normalLink' href='#Project' style={menuStyle}>Project</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#Contact' style={menuStyle}>Contact</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#Resume' style={menuStyle}>Resume</a>
                  </MenuItem>
                </MenuList>
              </Menu> 
            </Box>
          :       
            <SimpleGrid display='inline-grid' columns={[2,2,3,4,6]} className='main-nav' pl='20%' justifyContent={"right"} > 
              <a className='normalLink' href='#Home' >Home</a>
              <a className='normalLink' href='#About' >About Me</a>
              <a className='normalLink' href='#Skills' >Skills</a>
              <a className='normalLink' href='#Project' >Project</a>
              <a className='normalLink' href='#Contact' >Contact</a>
              <a className='normalLink' href='#Resume' >Resume</a>
            </SimpleGrid>
        }
        </div>
}