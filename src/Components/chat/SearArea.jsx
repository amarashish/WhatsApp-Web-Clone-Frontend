import SearchIcon from "@mui/icons-material/Search";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Box } from '@mui/material'

const SearchArea = ({ setText }) => {

  return (
    <Box className="search-box-main-div">
      <Box className="search-box-div">
        <SearchIcon style={{ margin: "0 10px" }} />
        <input
          className="search-chat"
          type="text"
          placeholder="Search or start a new chat"
          onChange={(e) => setText(e.target.value)}
        />
      </Box>
      <ArchiveIcon className='archive-unread-chat' />
    </Box>
  )
}

export default SearchArea;