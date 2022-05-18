import Chart from "../components/chart/Chart"
import Navbar from "../components/navbar/Navbar"
import Sidebar from "../components/sidebar/Sidebar"
import Featured from "../components/featured/Featured"
import './Single.scss'
import List from "../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">
              Edit
            </div>
            <h1 className="title">
              Information
            </h1>
            <div className="item">
              <img src="https://thispersondoesnotexist.com/image" alt="" className="itemImg" />
              <div className="details">
                <div className="itemTitle">Jane Doe</div>
                  <div className="detailItem">
                    <span className="itemKey">Email : </span>
                    <span className="itemKey">janedoe@gmail.com </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone : </span>
                    <span className="itemKey">+95986432781 </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address : </span>
                    <span className="itemKey">No.237.Ygn-Pyay Road,Dammha Street </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country : </span>
                    <span className="itemKey">Myanmar </span>
                  </div>
              </div>
            </div>
          </div>
          <div className="right">
              <Chart aspect={3 / 1} title={"User Spending"}/>
          </div>
        </div>
        <div className="bottominner">
          <h1 className="title">Last Transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single