const SearchItems = ({ items, isLoading,fetchError,handleSelectHero }) => {
  return (
    <ul className="absolute w-72 rounded-lg bg-slate-50 top-28 p-4 left-12">
      {
        !fetchError?
        (!isLoading ?
          (items.map((item, index) => (
            <li key={index} onClick={handleSelectHero} className="flex w-full justify-between items-center p-1">
              <img src={item.image.url} alt="" className="w-12" />
              <p>{item.name}</p>
            </li>
          ))) : (<p>Loading...</p>)):(<p>{`${fetchError}`}</p>)
        }

      


    </ul>
  )
}

export default SearchItems
