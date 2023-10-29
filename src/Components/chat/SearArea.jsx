import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box } from '@mui/material'

const SearchArea = ({ setText }) => {

  return (
    <Box className="search-box-main-div">
      <Box className="search-box-div">
        <SearchIcon style={{ margin: "0 10px", color:"#54656f" , height:"85%", alignSelf:"center"}} />
        <input
          className="search-chat"
          type="text"
          placeholder="Search or start a new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <FilterListIcon className='archive-unread-chat'/>
    </Box>
  )
}

export default SearchArea;