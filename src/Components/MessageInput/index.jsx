const MessageInput = (props) => {
  return (
    <form onSubmit={props.sentMessageHandler}>
      <input
        type="text"
        onChange={props.changeMessageHandler}
        value={props.currentMessage}
        placeholder="Enter your message"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MessageInput;