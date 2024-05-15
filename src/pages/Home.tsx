import Pagination from "../components/Pagination"
import SearchProducts from "../components/SearchProducts"
import TopBar from "../components/TopBar"
import '../App.css'



const Home = () => {
  return (
    <>

      <TopBar />
      <SearchProducts/>
      <Pagination />

    </>
  )
}

export default Home