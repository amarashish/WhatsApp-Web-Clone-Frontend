import { Button } from "@mui/material"
const GetAppButton = ()=>{
    return(
        <Button
          variant="contained"
          style={{
            borderRadius: "100px",
            backgroundColor: "#008069",
            height: "35px",
            width: "130px",
            textTransform: "lowercase",
          }}
        >
          Get the App
        </Button>
    )
}
export default GetAppButton;