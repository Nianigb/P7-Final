import React, { useState } from 'react'
import './Collapse.css'
import vector from '../../assets/icons/vector.svg'

function Collapse({ titre, description }) {
    const [open, setOpen] = useState(false)
    // const 

    return (
        <div className="collapse" id={`collapse-${titre}`}>
            <div className="header-collapse" onClick={() => setOpen(!open)}>
                <div className="titre-collapse">{titre}</div>
                <a
                    className={`arrow-collapse ${open}`}
                    href={`#collapse-${titre}`} /*onClick={() => setOpen(!open)}*/
                >
                    <img src={vector} className="arrow-vector" alt="Open list" />
                </a>
            </div>
            {open && <div className="description-collapse">{description}</div>}
        </div>
    )
}

export default Collapse