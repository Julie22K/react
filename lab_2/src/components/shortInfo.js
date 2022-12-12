import React from 'react';
import ShortInfoCard from "./shortInfo-card";
import SvgDesign from "./svg_design";
import SvgDevelopment from "./svg_development";
import SvgTesting from "./svg_testing";

function ShortInfo() {
    return (
        <div id="shortInfo" className="row container-part">
            <ShortInfoCard
                id={"design"}
                bg_clr="yellow"
                title="Design"
                text="Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue."
                icon={<SvgDesign/>}
            />
            <ShortInfoCard
                id={"development"}
                bg_clr="red"
                title="Development"
                text="Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue."
                icon={<SvgDevelopment/>}
            />
            <ShortInfoCard
                id={"testing"}
                bg_clr="blue"
                title="Testing & QA"
                text="Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus id et viverra augue."
                icon={<SvgTesting/>}
            />
        </div>
    );
}

export default ShortInfo;