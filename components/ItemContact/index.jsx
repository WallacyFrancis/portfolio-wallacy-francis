import React from 'react'
import { Item, Icon, Text } from './styles';
import { Anchor } from '../../styles/indexStyles';

export default function ItemContact({ IconFa, children }) {
  return (
    <Item>
      <Icon>
        <IconFa />
      </Icon>
      <Text>
        {children}
      </Text>
    </Item>
  )
}