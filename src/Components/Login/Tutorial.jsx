
import {Box, Typography} from '@mui/material'
const Tutorial = ()=>{
    return (
        <Box className="tutorial-area">
        <Typography variant="h5" style={{color:"#41525d", fonstSize: "28px"}}>Tutorial</Typography>
        <a
          className="need-help"
          href="https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=en"
          target="_blank"
          underline="none"
          rel="noreferrer"
        >
          Need help to get started?
        </a>
        <video width="550" height="300" controls>
          <source
            src="https://www.youtube.com/watch?v=ISdjXUd2txU"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Box>
    )
}
export default Tutorial