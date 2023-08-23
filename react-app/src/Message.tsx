function Message() {
  const name = "";
  function getName() {
    return name;
  }
  if (name) {
    return <h1>Hello {getName()}</h1>;
  }
  return <h1>Hello World</h1>;
}
export default Message;
