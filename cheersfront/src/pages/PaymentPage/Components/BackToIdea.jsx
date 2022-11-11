import React from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const BackToIdea = () => {
    const reactUrl = window.location.href;
    const reactUrlLength = reactUrl.split("/").length;
    const id = reactUrl.split("/").at(reactUrlLength - 1);

    return (
        <>
            <Link data-element-id="btn_donate_returnCampaign"
                type={'button'}
                to={`/get-details/${id}`} as={Link}
                className="show-for-large pl hrt-secondary-button hrt-secondary-button--gray
                hrt-secondary-button--inline hrt-secondary-button--small hrt-base-button">
                Return to fundraiser
            </Link>
        </>
    )
};


export default BackToIdea;