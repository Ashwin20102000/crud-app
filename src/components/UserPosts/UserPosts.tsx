import { AddCircleRounded } from "@mui/icons-material";
import { Button,  } from "@mui/material";
import React from "react"
import { useSelector } from "react-redux";
import { formStyle } from "../../utils/formStyle"
import Card from "../Card/Card";
import Form from "../Form/Form"

const UserPosts = () => {
  const state = useSelector((state:any)=>state.crud.userPost)
  const [open,setOpen] = React.useState(false);
  return (
    <div
    //  style={{display:'flex',justifyContent:'space-around'}}
    >
      <Button  onClick={()=>setOpen(true)} variant='contained' startIcon={<AddCircleRounded />}>
        Add New Post
      </Button>
      <Form style={formStyle} open={open} setOpen={setOpen} />
      {
        state &&  <Card data-testid="card" edit={true} card={state} />
      }
    </div>
  )
}

export default UserPosts