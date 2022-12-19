import * as S from './styles'
import banner from '../../assets/banner-home.png'
import logo from '../../assets/logo.png'

interface Props {
  navigation: {
    navigate: (routeName: string) => void
  }
}

export const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <S.Container source={banner}>
      <S.Logo source={logo} />
      <S.BannerBuy>
          <S.Text>Compre funkos de Squid Game que voce mais gosta! </S.Text>
          <S.Button
            onPress={() => navigation.navigate('Store')}
            activeOpacity={0.8}
          >
            <S.TextButton>Comprar agora</S.TextButton>
          </S.Button>
      </S.BannerBuy>
    </S.Container>
  )
}
