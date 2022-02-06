import { ListItem, PostTile, PostSubtitle } from '../src/components/Posts'
import { Wrapper } from '../src/components/Wrapper'
import { Header } from '../src/ui/Header'

export default function HomePage() {
  return (
    <>
      <Header />
      <Wrapper>
        <ul>
          <ListItem>
            <a href='https://www.linkedin.com/posts/laisfrigerio_linkedin-alura-start-activity-6895398831018909696-vl6q'>
              <PostTile className='title'>5k seguidores no Linkedin + Kit Alura Star</PostTile>
              <PostSubtitle>Esta semana chegou o kit da Alura Stars e eu também cheguei ao marco de 5K seguidores aqui no #Linkedin. Estou bastante feliz com esse momento da minha vida profissional e quero agradecer a todos que me seguem por aqui e interagem com meu conteúdo. E que este seja apenas o começo...</PostSubtitle>
            </a>
          </ListItem>

          <ListItem>
            <a href='https://www.linkedin.com/posts/laisfrigerio_nubank-software-empresas-activity-6887720882177892352-2Xze'>
              <PostTile className='title'>3 coisas que eu mais gosto no Nubank</PostTile>
              <PostSubtitle>No próximo domingo, (16/01), eu completo 2 meses de Nubank. E gostaria de compartilhar um balanço positivo deste período com as 3 coisas que mais gosto por aqui: Documentação: Parece utopia falar sobre documentação no universo de desenvolvimento de software. Mas acredite...</PostSubtitle>
            </a>
          </ListItem>

          <ListItem>
            <a href='https://www.linkedin.com/posts/laisfrigerio_hacktoberfest-hacktoberfest-hacktoberfest-activity-6890404721929379840-OxD2'>
              <PostTile className='title'>Chegou a camiseta exclusiva da edição 2021 do #Hacktoberfest</PostTile>
              <PostSubtitle>Pelo segundo ano consecutivo eu participei do #Hacktoberfest e hoje chegou a camiseta da última edição - 2021. Para quem ainda não conhece, o #Hacktoberfest é um evento anual que ocorre durante todo o mês de Outubro e tem como principal objetivo estimular a participação e...</PostSubtitle>
            </a>
          </ListItem>
        </ul>
      </Wrapper>
    </>
  )
}
