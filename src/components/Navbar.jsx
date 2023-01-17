import { HamburgerIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, MenuItem, MenuList, SimpleGrid } from "@chakra-ui/react"

export const Navbar = ({menu}) => {
    return <div className='container' >
        {
          menu ? 
            <Menu style={{
              border:'10px solid red',
              margin:'left'
            }}>
              <MenuButton style={{
                border:'2px solid white',
                display:'flex',
                padding :'10px'
            }}><HamburgerIcon/></MenuButton>
                <MenuList bg='black'>
                  <MenuItem bg='balck'>
                    <a className='normalLink'  href='#Home' >Home</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#About' >About Me</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#Skills' >Skills</a>
                  </MenuItem>
                  <MenuItem bg='black' >
                    <a className='normalLink' href='#Project' >Project</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#Contact' >Contact</a>
                  </MenuItem>
                  <MenuItem bg='balck' >
                    <a className='normalLink' href='#Resume' >Resume</a>
                  </MenuItem>
                </MenuList>
              </Menu> 
          :            
            <SimpleGrid columns={[3,4,4,5,6]} className='main-nav' > 
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