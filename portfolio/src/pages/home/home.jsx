import React from 'react';
import HelmetSeo from '../../components/main/HelmetSeo';
import { homeJsonLd } from "../../lib/jsonLd";

const Home = () => {
    return (
    <>
        <HelmetSeo
            title="Home"
            description="Full description of the home page"
            path="/"
            jsonLd={homeJsonLd()}
        />
    </>
    );
};

export default Home;