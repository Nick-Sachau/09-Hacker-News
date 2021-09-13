import React, { useState } from 'react'
import { Buttons, Search, Stories } from './Components/Export'
import { useFetch } from "./Util/useFetch";

function App() {
  const [pageNumber, setPageNumber] = useState(0);
  const url = `https://hn.algolia.com/api/v1/search?page=${pageNumber}`;
  const { loading } = useFetch(url);

  if(loading) {
    return <div className="loading">loading</div>
  }

  return (
    <div>
      <Search />
      <Buttons nextPage={setPageNumber} page={pageNumber}/>
      <Stories url={url}/>
    </div>
  );
}

export default App;
