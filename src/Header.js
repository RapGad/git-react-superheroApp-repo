
const Header = ({ search, setSearch }) => {
  return (
    <header className="w-full flex flex-col justify-between relative p-4 items-center">
        <h1 className="text-2xl mb-4">SuperHero App</h1>
        <input type="text"
        className="py-2 px-4 w-72 rounded-lg relative"
        value={search} 
        onChange={(e)=>setSearch(e.target.value)}
        />
      
    </header>
  )
}

export default Header
