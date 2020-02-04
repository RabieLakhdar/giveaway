import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
  width: 70%;
  text-align: center;
  margin-top:80px;
  display: grid;
  margin-bottom: 50px;

`;

export const Text = styled.span`
  font-family: Rubik;
  font-size: ${props => props.size};
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${props => props.color};
  margin-top: ${props => props.top};
  font-family: 'Roboto', sans-serif;
`;

export const Error = styled.span`
  color: #f50057;
  font-size: 16px;
  font-family: serif;
`
export const Button = styled.button`
  text-align: center;
  color: ${props => (props.color ? props.color : '#fff')};
  width: ${props => (props.width ? props.width : '155px')};
  height: ${props => (props.height ? props.height : '40px')};
  border: ${props => props.border};
  border-radius: 6px;
  pointer-events: auto;
  cursor: pointer;
  background-color: ${props =>
        props.background ? props.background : '#0054df'};
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  &:focus {
    outline: none;
  }
`
export const Label = styled.label`
  text-transform: uppercase;
  margin-bottom: 16px;
  display: block;
  width: auto;
  height: 17px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.16px;
  color: #808794;
  span {
    color: #df0000;
  }
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : 'column')};
  margin-right: ${({ marginRight }) => marginRight && marginRight}px;
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
`
export const Row = styled.span`
  display: flex;
  margin-top: ${props => props.top}px;
  margin-bottom: ${props => props.bottom}px;
  margin-left: ${props => props.left}px;
  margin-right: ${props => props.right}px;
  align-items: center;
  justify-content: ${props => (props.center ? 'center' : 'flex-start')};
  cursor: ${props => props.pointer && 'pointer'};
  flex-direction: ${({ direction }) => (direction ? direction : 'initial')};
`
export const Input = styled.input`
  border-radius: 4px;
  border: solid 1px #e0e3e8;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #3e3f42;
  padding: 16px 0 16px 16px;
  width: 82px;
  padding: 5px 0px;
  line-height: 10px;
  text-align: center;
  &:focus {
    border: solid 2px #0054df;
    outline: none;
  }
`

export const SmallInput = styled(Input)`
  width: ${({ width }) => width && width}px;
  height: ${({ height }) => height && height}px;
  margin-right: ${({ marginRight }) => marginRight && marginRight}px;
  margin-bottom: 0;
`

export const Forms = styled.div`
  border: 1px solid white ;
   width: 50%;
   margin: 0 auto;
   border-radius: 10px;
   padding-bottom: 15px;
   margin-bottom:45px;
   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   width: 50%;
`
