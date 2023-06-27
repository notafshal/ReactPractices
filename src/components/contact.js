const Contact = (props) => {
  return (
    <>
      <div className="contact">
        {props.data.name}
        <br />
        {props.data.contact}
        <br />
        {props.data.location} <br />
      </div>
    </>
  );
};
export default Contact;
