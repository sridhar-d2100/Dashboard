export default function Second_grid(){

    return (
        <div className="grid grid-cols-2 gap-2 h63">
            <Name_fir></Name_fir>
            <div>second one</div>
        </div>
    );
}


function Name_fir() {
    return (
        <div>
            <h1>This is my first grid</h1>
            <p>by the volvo man</p>
        </div>
    );
}
