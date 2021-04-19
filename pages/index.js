import Input from '../components/input';



export default function Home() {
  return (
    <div>
      <h1 className="title">Inputs</h1>  

      <Input default placeholder="Default"/>

      <Input error placeholder="Error"/>
    </div>
  )
}
