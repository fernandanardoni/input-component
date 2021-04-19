

import Input from '../components/input';
import InputGroup from '../components/inputGroup';
import HelperText from '../components/helper';
import Wrapper from '../components/wrapper';




export default function App() {
  return (
    
      <div className="container">

        <h1 className="title">Inputs</h1>

        <Wrapper>
          <Input default placeholder="Default" />
        </Wrapper>

        <Wrapper>
          <Input error placeholder="Error" />
        </Wrapper>

        <Wrapper>
          <Input disabled placeholder="Disabled" />
        </Wrapper>

        <Wrapper>
          <Input default placeholder="Default" />
          <HelperText>Some interesting text</HelperText>
        </Wrapper>


        <Wrapper>
          <Input error placeholder="Error" />
          <HelperText error>Some interesting text</HelperText>
        </Wrapper>

        <Wrapper>
          <InputGroup default placeholder="Default" />
        </Wrapper>

        <Wrapper>
          <InputGroup startIcon placeholder="Default" />
        </Wrapper>

        <Wrapper>
          <InputGroup endIcon placeholder="Default" />
        </Wrapper>





      </div>
    
  )
}
