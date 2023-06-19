import { MenuItem, MenuButton, MenuList, useDisclosure } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import { Menu } from '@chakra-ui/react'
import React from 'react'

const MenuItemComponent = ({ title, method }) => {

  const { isOpen: isMenuListOpen, onOpen: onMenuListOpen, onClose: onMenuListClose } = useDisclosure()

  return (
    <Menu isOpen={isMenuListOpen}>
      <MenuItem>
        <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} onClick={() => isMenuListOpen ? onMenuListClose() : onMenuListOpen()}>
          {title}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => method()}>Xem lịch sử mua hàng</MenuItem>
        </MenuList>
      </MenuItem>
    </Menu>
  )
}

export default MenuItemComponent