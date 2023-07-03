

import { useFetch } from './useFetch';
//import axios from 'axios';
//import { useEffect, useState } from 'react';


function App() {

  const {data} = useFetch('noticias')

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
