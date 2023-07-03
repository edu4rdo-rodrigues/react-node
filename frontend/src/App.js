import { useFetch } from './useFetch';

function App() {

  const {res} = useFetch('noticias')

  return (
    <div>
      <ul>
        {res?.map((data, index) => (
          <li key={index}>{data.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
