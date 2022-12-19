import { ImageSourcePropType } from 'react-native'

import * as S from './styles'
import star from '../../assets/icons/star.png'

interface Props {
  image: ImageSourcePropType
  title: string
}

export const Card: React.FC<Props> = ({ image, title }) => {
  return (
    <S.Container>
      <S.Funko source={image} />
      <S.TitleContainer>
        <S.TitleFunko>{title}</S.TitleFunko>
        <S.Start source={star} />
      </S.TitleContainer>
      <S.TextBuy>Comprar agora</S.TextBuy>
    </S.Container>
  )
}
