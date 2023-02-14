import { useEffect, useState } from "react";
import '../styles/Contacts.css'
import { test_contacts } from './dListContacts.js'
import Contact from './Contact'

function Contacts(props) {

    let [search, setSearch] = useState("");
    let [arrForDisp, getContactsList] = useState(test_contacts);

    useEffect(() => {
        getContactsList(
            test_contacts.filter((element) =>

                Object.values(element).filter(
                    (curValue) => curValue.toLowerCase().includes(search.toLowerCase())
                ).length > 0
            ))
    },
        [search]);

    return (
        <div className="divTable">
            <label > Search for: <input type="text" onChange={(event) => { setSearch(event.target.value) }} /></label>
            <div >
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrForDisp.map((element, i) => { return <Contact key={i} contact={element}> </Contact> })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Contacts;