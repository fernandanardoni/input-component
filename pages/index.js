import Input from '../components/input';
import InputError from '../components/input-error';


export default function Home() {
  return (
    <div>
      <h1 className="title">Inputs</h1>  

      <Input/>
      
      <InputError/>
    </div>
  )
}
