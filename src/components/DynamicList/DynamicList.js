import React from "react";


export function DynamicList() {
    function OrderedList(number_of_rows) {
        const arr = []
        for (let i = 1;i < number_of_rows+1;i++) {
           let x = "List element " + i + ' '
            arr.push(x)
        }
        return arr
    }
    
    function Mapping(list) {
        // eslint-disable-next-line react/jsx-key
        const listItems = list.map(list => <li> {list} </li>);
        return <ul>{listItems}</ul>
    }

    return (
        <div className="DynamicListContainer">
            <p>{Mapping(OrderedList(3))}</p>
        </div>
    )
}