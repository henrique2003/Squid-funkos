import { ImageSourcePropType } from 'react-native'

import * as S from './styles'
import { arrow_right } from '../../assets'

interface Props {
  image: ImageSourcePropType
  title: string
  quantify: number
}

export const Category: React.FC<Props> = ({ image, title, quantify }) => {
  return (
    <S.Container>
      <S.Funko source={image} />
      <S.Description>
        <S.Title>{title}</S.Title>
        <S.SubTitle>{quantify} items restantes</S.SubTitle>
        <S.MoreContainer>
          <S.MoreText>Ver mais</S.MoreText>
          <S.Icon source={arrow_right} />
        </S.MoreContainer>
      </S.Description>
    </S.Container>
  )
}
