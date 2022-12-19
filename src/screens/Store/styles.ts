import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.WINE};
  padding: 15px 30px;
  `

export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const Logo = styled.Image`
  width: 100px;
  height: 50px;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  margin-top: 7px;
`

export const SearchIcon = styled.Image`
  width: 30px;
  height: 30px;
  margin-top: 3px;
`

export const MenuIcon = styled.Image`
  width: 35px;
  height: 35px;
  margin-left: 27px;
`

export const Subtitle = styled.Text`
  margin-top: 20px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.OUTFIT_SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`

export const CardScrollView = styled.ScrollView`
  max-height: 380px;
`

export const CartegoryScrollView = styled.ScrollView`
  max-height: 200px;
`
