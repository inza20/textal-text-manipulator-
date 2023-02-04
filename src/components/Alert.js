import React from 'react'

export default function Alert(props) {

    const capitalise = (word)=>{           //func for capitalization
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (               //means if props.alert is true, do this
        props.alert && <div className={`alert alert-${props.alert.typ}  alert-dismissible fade show`} role="alert">

            <strong>{capitalise(props.alert.typ)} : </strong>{props.alert.msg}     
              

            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
