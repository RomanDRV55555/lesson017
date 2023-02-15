import '../styles/Contacts.css'
import fpict from '../img/f.png'
import mpict from '../img/m.png'
import napict from '../img/na.png'

function Contact(props) {
  const contact = props.contact;
  const pictGender = contact.gender === 'male' ? mpict :
    (contact.gender === 'female' ? fpict : napict);
  return (
    <tr>
      <td id='firstName'> {contact.firstName}</td>
      <td id='lastName' >{contact.lastName}</td>
      <td id='phone' >{contact.phone}</td>
      <td >
        <img className='.icon_pict' alt='gender' width={'15px'} height={'15px'} src={pictGender} />
      </td>
    </tr>
  );
};
export default Contact;