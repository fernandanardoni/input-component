import styled from 'styled-components';

const Input = styled.input`
width: 200px;
height: 55px;
border: ${props => props.default ? "1px solid #828282": undefined };
border: ${props => props.error ? "1px solid #D32F2F": undefined };
border: ${props => props.disabled ? "none": undefined };
background:  ${props => props.disabled ? "#F2F2F2": "transparent" };
cursor:  ${props => props.disabled ? "not-allowed": undefined };
border-radius: 8px;
outline: none;
:hover {
    border: ${props => props.disabled ? "none": "1px solid #333333" };

}
:focus {
    border: ${props => props.default ? "1px solid #2962FF": undefined };
    border: ${props => props.error ? "1px solid #D32F2F": undefined };
}
::placeholder {
    font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    font-weight: 500;
}
`

export default Input;

