import React from "react";
import './Container.css'

function Container({children, id, title, backgroundColor}) {
    return (
        <section id={id} className={backgroundColor ? '' : 'container'} style={{backgroundColor: backgroundColor}}>
            {backgroundColor && <div className="container">
                <h2>{title}</h2>
                {children}
            </div>}
            {!backgroundColor && <div>
                <h2>{title}</h2>
                {children}
                </div>}
        </section>
    );
}

export default Container;