import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from './styles'
import { Anchor } from '../../../styles/indexStyles'

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([])

  useEffect(() => {
    let abortController = new AbortController(); 

    function getGitHubAPI() {
      fetch('https://api.github.com/users/WallacyFrancis/repos')
      .then(async res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        const data = await res.json()
        const orderData = data.sort((a, b) => {
          return new Date(b.created_at) - new Date(a.created_at)
        })
        setItemsApi(orderData)
      })
      .catch(e => console.log(e))
    }

    getGitHubAPI()

    return () => abortController.abort();  
  }, [])

  return (
    <Container>
     <Content>
       <Ul>
        {itemsApi.map(item => (
          <Li key={item.id}>
            <TitleProject>{item.name.toUpperCase()}</TitleProject>
            <Url>URL: <Anchor href={item.html_url} target="_blank">{item.html_url}</Anchor></Url>
            <Created_at>Data Criação: { Intl.DateTimeFormat('pt-BR')
              .format(new Date(item.created_at))}
            </Created_at>
          </Li>
        ))}
       </Ul>
     </Content>
   </Container>
  )
}