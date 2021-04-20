import styled from 'styled-components';
import Input from './input';
import telephone from '../public/assets/telephone.svg';

const InputGroup = styled(Input)`
    background-image: url(${telephone});
    background-repeat: no-repeat;
    background-position: ${props => props.startIcon ? "center left 10px" : undefined};
    background-position: ${props => props.endIcon ? "center right 10px" : undefined};
    text-indent: ${props => props.startIcon ? "40px" : undefined};
    text-indent: ${props => props.endIcon ? "2px" : undefined};
    ::placeholder {
        text-indent: ${props => props.startIcon ? "40px" : undefined};
        text-indent: ${props => props.endIcon ? "2px" : undefined};
    }
    
`;

export default InputGroup;