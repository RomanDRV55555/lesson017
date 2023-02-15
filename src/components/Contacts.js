import { useEffect, useState } from "react";
import '../styles/Contacts.css'
import { test_contacts } from './dListContacts.js'
import Contact from './Contact'

function Contacts(props) {

    let [search, setSearch] = useState("");
    let [arrForDisp, getContactsList] = useState(test_contacts);
    let [checkMale, setCheckMale] = useState(true);
    let [checkFemale, setCheckFemale] = useState(true);

    useEffect(() => {
        console.log("search", search);
        console.log("checkMale", checkMale);
        console.log("checkFemale", checkFemale);
        getContactsList(
            test_contacts.filter((element) =>
                (element.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    element.lastName.toLowerCase().includes(search.toLowerCase()) ||
                    element.phone.includes(search))
                &&
                (
                    (checkMale && (element.gender === "male"))
                    ||
                    (checkFemale && (element.gender === "female"))
                    ||
                    (!checkMale && !checkFemale && !element.gender)
                )
            )
        )
    },
        [search, checkMale, checkFemale]);

    const onChangeCheckMale = ({ target: { checked } }) => {
        setCheckMale(checked);
    };

    const onChangeCheckFemale = ({ target: { checked } }) => {
        setCheckFemale(checked);
    };

    return (
        <div className="divTable">
            <label > Search for: <input type="text"
                onChange={(event) => { setSearch(event.target.value) }}
            />
                <input type="checkbox" defaultChecked={checkMale} onChange={onChangeCheckMale} /> Male
                <input type="checkbox" defaultChecked={checkFemale} onChange={onChangeCheckFemale} /> Female
            </label>
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