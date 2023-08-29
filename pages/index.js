import Image from 'next/image'
import { Link } from '../src/components/Link'
import { PageTitle } from '../src/components/PageTitle'
import { Header } from '../src/ui/Header'
import { 
  HomeWrapper, 
  FeaturedPosts, 
  FeaturedPostList, 
  FeaturedPost, 
  FeaturedPostDate,
  FeaturedPostImage,
  FeaturedPostHeader,
  FeaturedPostTitle,
  FeaturedPostSubTitle  } from '../src/components/Home'

export default function HomePage() {
  return (
    <>
      <PageTitle>Blog | Lais Frigério</PageTitle>
      <Header />
      <HomeWrapper>
        <FeaturedPosts>
          <FeaturedPostList>
            <FeaturedPost>
              <Link target='_blank' href='/posts/2023-08-27-3-materiais-para-aprender-testes-automatizados-javascript/'>
                <FeaturedPostImage>
                  <Image
                    src={`/images/home-2023-08-27-3-materiais-para-aprender-testes-automatizados-javascript.png`}
                    alt="Foto em preto e branco de uma mesa de trabalho com um monitor e computador portátil"
                    fill
                    priority
                  />
                </FeaturedPostImage>
                <FeaturedPostHeader>
                  <FeaturedPostDate>27/08/2023 às 23:00</FeaturedPostDate>
                  <FeaturedPostTitle>3 materiais para aprender testes automatizados com JavaScript</FeaturedPostTitle>
                  <FeaturedPostSubTitle>3 recursos (1 livro e 2 cursos) para você aprender e aprofundar seus conhecimentos em testes automatizados com JavaScript</FeaturedPostSubTitle>
                </FeaturedPostHeader>
              </Link>
            </FeaturedPost>

            <FeaturedPost>
              <Link target='_blank' href='https://www.instagram.com/p/CwNfz8vg7oy/'>
                <FeaturedPostImage>
                  <Image
                    src={`/images/5-canais-no-youtube-de-mulheres-programadora.png`}
                    alt="Foto em preto e branco de um monitor com a logo do Youtube ao centro"
                    fill
                    priority
                  />
                </FeaturedPostImage>
                <FeaturedPostHeader>
                  <FeaturedPostDate>21/08/2023 às 08:00</FeaturedPostDate>
                  <FeaturedPostTitle>5 canais do Youtube de Mulheres Programadoras</FeaturedPostTitle>
                  <FeaturedPostSubTitle>Todas elas têm perfis em diversas redes sociais, como Instagram e Linkedin!! Então, aproveita para seguir elas e ficar ligado (a) nos novos conteúdos 🤍</FeaturedPostSubTitle>
                </FeaturedPostHeader>
              </Link>
            </FeaturedPost>

            <FeaturedPost>
              <Link target='_blank' href='https://www.instagram.com/p/CuR_bC1gBD5/'>
                <FeaturedPostImage>
                  <Image
                    src={`/images/3-livros-que-toda-pessoa-programadora-deveria-ler.png`}
                    alt="Foto em preto e branco de uma sala grande com várias prateleiras de livros"
                    fill
                    priority
                  />
                </FeaturedPostImage>
                <FeaturedPostHeader>
                  <FeaturedPostDate>04/07/2023 às 07:00</FeaturedPostDate>
                  <FeaturedPostTitle>3 Livros que uma pessoa programadora deveria ler 📖</FeaturedPostTitle>
                  <FeaturedPostSubTitle>Livro bom é livro recomendado! Segue a dica com 3 livros que uma pessoa desenvolvedora deveria ler</FeaturedPostSubTitle>
                </FeaturedPostHeader>
              </Link>
            </FeaturedPost>

            <FeaturedPost>
              <Link target='_blank' href='https://www.instagram.com/p/CuO3tVaALid/'>
                <FeaturedPostImage>
                  <Image
                    src={`/images/5-tecnologias-usadas-no-nubank.png`}
                    alt="Foto em preto e branco de 3 pessoas olhando para um monitor"
                    fill
                    priority
                  />
                </FeaturedPostImage>
                <FeaturedPostHeader>
                  <FeaturedPostDate>03/07/2023 às 07:00</FeaturedPostDate>
                  <FeaturedPostTitle>Tecnologias usadas no Nubank</FeaturedPostTitle>
                  <FeaturedPostSubTitle>Veja as cinco tecnologias mais usadas no Nubank</FeaturedPostSubTitle>
                </FeaturedPostHeader>
              </Link>
            </FeaturedPost>

            <FeaturedPost>
              <Link target='_blank' href='https://www.instagram.com/p/ClJh-Ptr_zw/'>
                <FeaturedPostImage>
                  <Image
                    src={`/images/minha-primeira-palestra-programaria-summit-2022.png`}
                    alt="Foto em preto e branco que contém a capa parcial de dois livros: a capa do livro da esquerda é sobre refatoração de código e o da direita é a capa do livro Clean Code"
                    fill
                    priority
                  />
                </FeaturedPostImage>
                <FeaturedPostHeader>
                  <FeaturedPostDate>19/11/2022 às 13:00</FeaturedPostDate>
                  <FeaturedPostTitle>Quando eu realizei a minha primeira palestra</FeaturedPostTitle>
                  <FeaturedPostSubTitle>Veja como foi minha primeira palestra ténica no Programaria Summit 2022 🤍</FeaturedPostSubTitle>
                </FeaturedPostHeader>
              </Link>
            </FeaturedPost>
          </FeaturedPostList>
        </FeaturedPosts>
      </HomeWrapper>
    </>
  )
}
