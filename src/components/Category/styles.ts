import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_WINE};
  border-radius: 20px;
  max-width: 220px;
  height: 85px;
  margin-top: 40px;
  margin-right: 15px;
  margin-left: 15px;
`

export const Funko = styled.Image`
  margin-left: 15px;
  margin-top: -27px;
`

export const Description = styled.View`
  margin-left: 10px;
  margin-top: 15px;
  margin-right: 20px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.OUTFIT_SEMIBOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XSML}px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.OUTFIT_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SSML}px;
  margin-top: 5px;
`

export const MoreContainer = styled.View`
  flex-direction: row;
`

export const MoreText = styled.Text`
  margin-top: 8px;
  color: ${({ theme }) => theme.COLORS.RED};
  font-family: ${({ theme }) => theme.FONT_FAMILY.OUTFIT_MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.SSML}px;
`

export const Icon = styled.Image`
  width: 10px;
  height: 10px;
  margin-top: 11px;
  margin-left: 3px;
`
