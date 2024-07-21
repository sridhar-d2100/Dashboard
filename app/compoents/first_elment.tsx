export default function First_grid(){

    return (
        <div className="grid grid-cols-2 gap-2 h63">
            <Name_first></Name_first>
            <div>second one</div>
        </div>
    );
}


function Name_first() {
    return (
        <div>
            <h1>This is my first grid</h1>
            <p>by the volvo man</p>
        </div>
    );
}
