import React from 'react'
import { Container, Content } from '../../../styles/contactStyles';
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'
import { Anchor } from '../../../styles/indexStyles'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact IconFa={FaLinkedin}>
          <Anchor href='https://www.linkedin.com/in/wallacy-francis/' target="_blank">https://www.linkedin.com/in/wallacy-francis/</Anchor>
        </ItemContact>
        <ItemContact IconFa={FaGithub}>
          <Anchor href='https://github.com/WallacyFrancis' target="_blank">https://github.com/WallacyFrancis</Anchor>
        </ItemContact>
        <ItemContact IconFa={FaEnvelope}>
          <Anchor href='#'>wallacy_francis@hotmail.com</Anchor>
        </ItemContact>
        <ItemContact IconFa={FaWhatsapp}>
          <Anchor href='https://api.whatsapp.com/send?phone=5535991439972&text=Oi!%20Entrei%20em%20contato%20pelo%20seu%20site%20pessoal' target="_blank">Fale comigo pelo whats</Anchor>
        </ItemContact>
      </Content>
    </Container>
  )
}