import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import DataTable from "../datatable/Datatable"
// import Datatable from "../components/datatable/Datatable"
import "./list.scss"

const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List