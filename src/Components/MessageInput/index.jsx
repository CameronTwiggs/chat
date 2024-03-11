import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import Divider from '@mui/material/Divider';




const MessageInput = (props) => {
  return (
    <>
      <Divider /> 
      <form onSubmit={props.sentMessageHandler}>
        <TextField
          type="text"
          onChange={props.changeMessageHandler}
          value={props.currentMessage}
          placeholder="Enter your message"
          variant="outlined"
          label="Message"
          
        />
        <Button variant="contained" type="submit">Submit</Button>
      </form>
    </>
  );
};

export default MessageInput;