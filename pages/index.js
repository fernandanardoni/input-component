import Input from '../components/input';
import InputGroup from '../components/inputGroup';
import HelperText from '../components/helper';
import Wrapper from '../components/wrapper';




export default function App() {
  return (

    <div className="container">

      <h1>Inputs</h1>

      <Wrapper>
        <p> &lt;Input default &gt; 	&amp;:hover	&amp;:focus </p>
        <Input default placeholder="Default" />
      </Wrapper>

      <Wrapper>
        <p> &lt;Input error &gt; 	&amp;:hover &amp;:focus </p>
        <Input error placeholder="Error" />
      </Wrapper>

      <Wrapper>
        <p> &lt;Input disabled &gt; </p>
        <Input disabled placeholder="Disabled" />
      </Wrapper>

      <Wrapper>
        <p> &lt;Input helperText &gt;	&amp;:hover	&amp;:focus </p>
        <Input default placeholder="Default" />
        <HelperText>Some interesting text</HelperText>
      </Wrapper>


      <Wrapper>
        <p> &lt;Input helperText error &gt;	&amp;:hover	&amp;:focus </p>
        <Input error placeholder="Error" />
        <HelperText error>Some interesting text</HelperText>
      </Wrapper>


      <Wrapper>
      <p> &lt;Input startIcon &gt; &amp;:hover	&amp;:focus </p>
        <InputGroup default startIcon placeholder="Default" />
      </Wrapper>

      <Wrapper>
      <p> &lt;Input endIcon &gt;	&amp;:hover	&amp;:focus </p>
        <InputGroup default endIcon placeholder="Default" />
      </Wrapper>

      <Wrapper>
      <p> &lt;Input value="Text" &gt;	&amp;:hover	&amp;:focus </p>
        <Input default defaultValue="Text" />
      </Wrapper>

      <Wrapper>
      <p> &lt;Input size="sm" &gt;	&amp;:hover	&amp;:focus </p>
        <Input default size="40px" placeholder="Small" />
      </Wrapper>

      <Wrapper>
      <p> &lt;Input fullWidth &gt;	&amp;:hover	&amp;:focus </p>
        <Input default fullWidth defaultValue="Text" />
      </Wrapper>

      <Wrapper>
      <p> &lt;Input multiLine &gt;	&amp;:hover	&amp;:focus </p>
        <Input default multiLine="100px" defaultValue="Text" />
      </Wrapper>


      <footer><p>made with <span>&hearts;</span> by <strong>Fernanda Nardoni</strong> </p></footer>

    </div>

  )
}
