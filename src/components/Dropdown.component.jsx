import React, {Fragment} from "react"

import DropdownItem from "./DropdownItem.component"

const Dropdown = (props) => {
    const { foundUsers } = props
    console.log("Inside the Dropdown function user = ", foundUsers)
    if (foundUsers !== []) {
        // console.log("inside dropdown found=", foundUsers)
        return (
            <div className={`dropdown ${foundUsers === [] ? "hidden" : ""}`} >
                {foundUsers.map(user => <DropdownItem user={user} key={user.id} />)}
            </div>
        )
    } else {
        return (
            <Fragment >
                abcd
            </Fragment>
        )
    }
}   
export default Dropdown