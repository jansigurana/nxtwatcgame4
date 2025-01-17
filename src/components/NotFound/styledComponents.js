import styled from 'styled-components'
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  min-height: 95vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
}`
export const NotFoundVideosView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  flex-direction: column;
  background: none;
`
export const NotFoundVideosImage = styled.img`
  width: 200px;
  @media screen and (max-width: 768px) { 
    width: 450px;
}`
export const NotFoundVideosHeading = styled.h1`
  font-family:'Roboto';
  font-size: 25px;
  text-align: center;
  color: ${props => props.headingColor};
`
export const NotFoundVideosNote = styled.p`
  font-family:'Roboto';
  font-size: 20px;
  text-align: center;
  color: ${props => props.noteColor};
`
