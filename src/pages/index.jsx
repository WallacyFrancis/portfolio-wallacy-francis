import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Anchor, Logo, Img } from '../../styles/indexStyles'
import Link from 'next/link'

export default function Home() {
  return (
   <Container>
     <Content>
      <Infos>
        <Name>Olá, sou Wallacy Francis</Name>
        <Function>Web FullStack Developer</Function>
        <Intro>Formado em desenvolvimento de software web pela escola <Anchor href="https://www.betrybe.com/" target="_blank" rel="noreferrer">Trybe</Anchor>.
          Tenho experiências em desenvolvimento com:
          Html, CSS, JavaScript, React, Typescript, Node, Sql, MongoDB, Docker, Python, Jest, Cypress, entre outros.
          Sou apaixonado por tecnologia e busco sempre me desenvolver estudando e adquirindo experiências.
          Entre em <Anchor href="https://portfolio-wallacy-francis.vercel.app/contact">contato</Anchor> comigo para que possamos bater um papo e descutir sobre tecnologias
          e de mais assuntos web
        </Intro>
        <Link href="projects">
          <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
        </Link>
      </Infos>
      <Logo>
        <Img src="/images/logo.png" alt="logo" />
      </Logo>
     </Content>
   </Container>
  )
}
