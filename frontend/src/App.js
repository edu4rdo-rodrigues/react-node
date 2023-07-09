import { useFetch } from './useFetch';

function App() {

  const {data, err} = useFetch('noticias');
  console.log('Erro: ', err);
  
  return (
    <div>
      <ul>
        {data?.map((data, index) => (
          <li key={index}>{data.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

