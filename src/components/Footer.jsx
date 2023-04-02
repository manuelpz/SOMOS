import React from "react";

export default function Footer() {
    let today = new Date();
    let year = today.getFullYear();

    return (
        <div className="footer">
            <i><b className="footerText">© SOMOS {year}</b></i>
        </div>
    )
}