import React,{useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../images/logo.svg";
import '../Stylesheet/Header.css';
import Fuse from 'fuse.js';


function Header() {
  const[search,setsearchTerm]=useState('');
const products=JSON.parse(localStorage.getItem("products"));
const fuse=new Fuse(
    products,
  {
  keys:[
    'name'
  ]
});
  const showSearchResult=()=>{
  console.log(fuse.search(search));
  }
  return (
    <div className="Header_container">
         <div className="Header_leftContainer">
             <img src={Logo} alt="OLX-CLONE-LOGO" className="left-logo" />
         </div>
         <div className="Header_centerContainer">
             <input type="text"
              placeholder="Search" 
              className="Header_searchInput"  
              onChange={(e)=> setsearchTerm(e.target.value)}  
              />
             <SearchIcon  
             className="Header_center_search_icon" 
            onClick={showSearchResult}

             />
         </div>
         <div className="Header_rightContainer">
           <h4 className="login"> Login</h4>
           <button className="sell">SELL</button>
         </div>
    </div>
  )
}

export default Header;