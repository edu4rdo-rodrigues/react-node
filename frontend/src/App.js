import { useEffect } from 'react';
import { useFetch } from './useFetch';

function App() {

  const {data, err} = useFetch('noticias');

  useEffect(()=>{
    console.log('Erro - App.js: ', err);
  },[]);  
  
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

