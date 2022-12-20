
import '../css/pallete.css';
import PalleteCardTableColor from "./pallete-table-color";
import { useNavigate} from "react-router-dom";
import React, {useCallback} from "react";

function PalleteCard(props) {
    const colors= props.palette.colors;
    const link="/palette/"+props.palette.id;

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate(link, {replace: true}), [navigate]);

    return (
        <div className="pallete-card" onClick={handleOnClick} >
            <div className="pallete-table">
                <PalleteCardTableColor color={colors[0].color}/>
                <PalleteCardTableColor color={colors[1].color}/>
                <PalleteCardTableColor color={colors[2].color}/>
                <PalleteCardTableColor color={colors[3].color}/>
                <PalleteCardTableColor color={colors[4].color}/>
                <PalleteCardTableColor color={colors[5].color}/>
                <PalleteCardTableColor color={colors[6].color}/>
                <PalleteCardTableColor color={colors[7].color}/>
                <PalleteCardTableColor color={colors[8].color}/>
                <PalleteCardTableColor color={colors[9].color}/>
                <PalleteCardTableColor color={colors[10].color}/>
                <PalleteCardTableColor color={colors[11].color}/>
                <PalleteCardTableColor color={colors[12].color}/>
                <PalleteCardTableColor color={colors[13].color}/>
                <PalleteCardTableColor color={colors[14].color}/>
                <PalleteCardTableColor color={colors[15].color}/>
                <PalleteCardTableColor color={colors[16].color}/>
                <PalleteCardTableColor color={colors[17].color}/>
                <PalleteCardTableColor color={colors[18].color}/>
                <PalleteCardTableColor color={colors[19].color}/>
            </div>

                <p className="pallete-card-name">{props.palette.paletteName}
                    <span className="pallete-card-emoji">{props.palette.emoji}</span>
                </p>
        </div>
    );
}

export default PalleteCard;
