import styled from 'styled-components/native'

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const Logo = styled.Image`
  margin-top: 10px;
`

export const BannerBuy = styled.View`
  background-color: ${({ theme }) => theme.COLORS.DARK_OPACITY};
  max-width: 500px;
  width: 100%;
  text-align: center;
  border-radius: 20px;
  padding: 20px 30px;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.OUTFIT_REGULAR};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.RED};
  border-radius: 30px;
  padding: 15px 20px;
  outline: none;
  outline: none;
  margin-top: 20px;
`

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.AUDIOWIDE_REGULAR};
  text-align: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
