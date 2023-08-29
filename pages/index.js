import { FeaturedPost } from '../src/components/FeaturedPost'
import { PageTitle } from '../src/components/PageTitle'
import { Header } from '../src/ui/Header'

import { 
  HomeWrapper, 
  FeaturedPosts, 
  FeaturedPostList
} from '../src/components/Home'

export default function HomePage() {
  return (
    <>
      <PageTitle>Blog | Lais Frigério</PageTitle>
      <Header />
      <HomeWrapper>
        <FeaturedPosts>
          <FeaturedPostList>
            <FeaturedPost
              href='/posts/2023-08-27-3-materiais-para-aprender-testes-automatizados-javascript/'
              imgSrc='/images/home-2023-08-27-3-materiais-para-aprender-testes-automatizados-javascript.png'
              imgAlt='Foto em preto e branco de uma mesa de trabalho com um monitor e computador portátil'
              date='27/08/2023 às 23:00'
              title='3 materiais para aprender testes automatizados com JavaScript'
              subtitle='3 recursos (1 livro e 2 cursos) para você aprender e aprofundar seus conhecimentos em testes automatizados com JavaScript'
            />

            <FeaturedPost
              href='https://www.instagram.com/p/CwNfz8vg7oy/'
              imgSrc='/images/5-canais-no-youtube-de-mulheres-programadora.png'
              imgAlt='Foto em preto e branco de um monitor com a logo do Youtube ao centro'
              date='21/08/2023 às 08:00'
              title='5 canais do Youtube de Mulheres Programadoras'
              subtitle='Todas elas têm perfis em diversas redes sociais, como Instagram e Linkedin!! Então, aproveita para seguir elas e ficar ligado (a) nos novos conteúdos 🤍'
            />

            <FeaturedPost
              href='https://www.instagram.com/p/CuR_bC1gBD5/'
              imgSrc='/images/3-livros-que-toda-pessoa-programadora-deveria-ler.png'
              imgAlt='Foto em preto e branco de uma sala grande com várias prateleiras de livros'
              date='04/07/2023 às 07:00'
              title='3 Livros que uma pessoa programadora deveria ler 📖'
              subtitle='Livro bom é livro recomendado! Segue a dica com 3 livros que uma pessoa desenvolvedora deveria ler'
            />

            <FeaturedPost
              href='https://www.instagram.com/p/CuO3tVaALid/'
              imgSrc='/images/5-tecnologias-usadas-no-nubank.png'
              imgAlt='Foto em preto e branco de 3 pessoas olhando para um monitor'
              date='03/07/2023 às 07:00'
              title='Tecnologias usadas no Nubank'
              subtitle='Veja as cinco tecnologias mais usadas no Nubank'
            />

            <FeaturedPost
              href='https://www.instagram.com/p/ClJh-Ptr_zw/'
              imgSrc='/images/minha-primeira-palestra-programaria-summit-2022.png'
              imgAlt='Foto em preto e branco que contém a capa parcial de dois livros: a capa do livro da esquerda é sobre refatoração de código e o da direita é a capa do livro Clean Code'
              date='19/11/2022 às 13:00'
              title='Quando eu realizei a minha primeira palestra'
              subtitle='Veja como foi minha primeira palestra ténica no Programaria Summit 2022 🤍'
            />
          </FeaturedPostList>
        </FeaturedPosts>
      </HomeWrapper>
    </>
  )
}
