import Palletecard from "./palletecard";
import  "../css/main.css";

function Main(props) {
    const data=props.data;
    return (
        <main>
            <div id="table_pallets">
                <div className="row">
                    <div className="col"><Palletecard palette={data[0]}/></div>
                    <div className="col"><Palletecard palette={data[1]}/></div>
                    <div className="col"><Palletecard palette={data[2]}/></div>
                </div>
                <div className="row">
                    <div className="col"><Palletecard palette={data[3]}/></div>
                    <div className="col"><Palletecard palette={data[4]}/></div>
                    <div className="col"><Palletecard palette={data[5]}/></div>
                </div>
                <div className="row">
                    <div className="col"><Palletecard palette={data[6]}/></div>
                    <div className="col"><Palletecard palette={data[7]}/></div>
                    <div className="col"><Palletecard palette={data[8]}/></div>
                </div>
            </div>
        </main>
    );
}

export default Main;
