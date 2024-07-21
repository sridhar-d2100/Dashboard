import React from "react";

export default function Third_grid() {
    return (
        <div className="grid grid-cols-3 gap-2 h63">
            <div>
                <a>left panel</a>
            </div>
            <FeedTemplate />
            <div>Right panel</div>
        </div>
    );
}

function FeedTemplate() {
    return (
        <div>Centre panel</div>

    );
}
