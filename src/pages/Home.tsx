import Pagination from "../components/Pagination"
import Products from "../components/Products"
import SearchProducts from "../components/SearchProducts"
import TopBar from "../components/TopBar"



const Home = () => {
  return (
    <>
      <SearchProducts />
     
      <Pagination />
      <TopBar />

    </>
  )
}

export default Home