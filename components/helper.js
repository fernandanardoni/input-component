import styled from 'styled-components';

const HelperText = styled.span`
    font-size: 12px;
    color: ${props => props.error ? "#D32F2F" : "#828282" } ;
    

`
export default HelperText;