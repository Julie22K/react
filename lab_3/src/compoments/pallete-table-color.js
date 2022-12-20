
import '../css/pallete.css';
function PalleteCardTableColor(props) {

    return (
        <div className="pallete-table-color"
             style={{background: props.color}}>
        </div>
    );
}

export default PalleteCardTableColor;
