import '../styles/Contacts.css'

function Contact(props) {
  const contact = props.contact;  
  return (
      <tr>
        <td id='firstName'> {contact.firstName}</td>
        <td id='lastName' >{contact.lastName}</td>
        <td id='phone' >{contact.phone}</td>
        {/* <td>{contact.gender}</td> */}
      </tr>
  );
};
export default Contact;