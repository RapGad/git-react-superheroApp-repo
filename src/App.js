import { useState, useEffect } from "react";
import Header from "./Header";
import Image from "./Image";
import SearchItems from "./SearchItems";
function App() {

  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [fetchError, setFetchError] = useState(null)
  const [powers,setPowers] = useState({})
  const [abilities,setAbilities] = useState()
  const [image, setImage] = useState()
  const [biography,setBiography] = useState()
  function handleSelectHero(){

  }

  useEffect(() => {
    async function fetchHero() {
      try {
        setFetchError(null)
        const response = await fetch(`https://www.superheroapi.com/api.php/871174954452547/search/${search}`)
        if (!response.ok) throw 'Unable to connect'
        const data = await response.json()

        data.results ? setItems(data.results.slice(0, 5)) : setFetchError('Not found')

        console.log(items)
        setIsLoading(false)

      } catch (error) {
        setFetchError(error.message)

      }



    }

    if (search !== '') {
      setIsLoading(true)
      fetchHero()
    }

  }, [search])
  return (
    <div className="min-h-screen flex flex-col bg-slate-400">
      <Header
        search={search}
        setSearch={setSearch}
      />
      {search &&<SearchItems
        items={items}
        isLoading={isLoading} 
        fetchError={fetchError}
        handleSelectHero={handleSelectHero}/>}

      <>
        <Image />


      </>


    </div>
  );
}

export default App;
