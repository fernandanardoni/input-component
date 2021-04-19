import styled from 'styled-components';
import Input from './input';
import telephone from '../public/assets/telephone.svg';

const InputGroup = styled(Input)`
    background: ${props => props.startIcon ? "url(${telephone}) no-repeat center left 10px" : undefined};
    background: ${props => props.endIcon ? "url(${telephone}) no-repeat center right 10px" : undefined};
    text-indent: 40px;
    ::placeholder {
        text-indent: 40px;
    }
    
`;

export default InputGroup;