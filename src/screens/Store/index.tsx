import * as S from './styles'
import {
  logo,
  search,
  doll,
  master,
  supervisor,
  menu,
  soldier
} from '../../assets'
import { Card, Category } from '../../components'

export const Store: React.FC = () => {
  return (
    <S.Container>
      <S.Navbar>
        <S.Logo source={logo} />
        <S.IconsContainer>
          <S.SearchIcon source={search} />
          <S.MenuIcon source={menu} />
        </S.IconsContainer>
      </S.Navbar>
      <S.Subtitle>Recomendados para voce</S.Subtitle>
      <S.CardScrollView
        horizontal
        alwaysBounceHorizontal
      >
        <Card
          image={supervisor}
          title="Supervisor"
        />
        <Card
          image={master}
          title="Chefe"
        />
      </S.CardScrollView>
      <S.Subtitle>Últimas novidades</S.Subtitle>
      <S.CartegoryScrollView
        horizontal
        alwaysBounceHorizontal
      >
        <Category
          image={soldier}
          quantify={3}
          title='Soldado'
        />
        <Category
          image={doll}
          quantify={4}
          title='Boneca'
        />
      </S.CartegoryScrollView>
    </S.Container>
  )
}
