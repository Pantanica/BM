import { Tag } from "@mui/icons-material";


function TagProfileInfo(props){

    return(
        <div>
            <p className = {props.className}>#{props.tagname}</p>
        </div>
    )


}

export default TagProfileInfo;