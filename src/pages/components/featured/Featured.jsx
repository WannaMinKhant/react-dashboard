import "./featured.scss"
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
          <h1 className="title">Total Revenue</h1>
          <MoreVertOutlinedIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
            <CircularProgressbar value={70} text="70%" strokeWidth={5}/>
        </div>
        <p className="title">Total Sales made today</p>
        <p className="amount"> $420</p>
        <p className="desc">
          Previous transcations processing, Last pyaments may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Targert</div>
              <div className="itemResult negative">
                <KeyboardArrowDownIcon fontSize="small"/>
                  <div className="resultAmount">$12.4 K
                  </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small"/>
                  <div className="resultAmount">$12.4 K
                  </div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <KeyboardArrowUpIcon fontSize="small"/>
                  <div className="resultAmount">$12.4 K
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured