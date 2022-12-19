import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.LIGHT_WINE};
  border-radius: 30px;
  max-width: 220px;
  height: 290px;
  padding: 20px;
  text-align: center;
  margin-top: 80px;
  margin-right: 15px;
`

export const Funko = styled.Image`
  margin: 0 auto;
  margin-top: -70px;
`

export const TitleContainer = styled.View`
  flex-direction: row;
  margin: 0 auto;
  margin-top: -30px;
`

export const TitleFunko = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.OUTFIT_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const Start = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 13px;
`

export const TextBuy = styled.Text`
  margin-top: 15px;
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.AUDIOWIDE_REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
`
