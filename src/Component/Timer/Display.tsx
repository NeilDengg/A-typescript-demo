import * as React from 'react';
import './Display.css';
interface MyProps {
    value: string;
}


const Display: React.FunctionComponent<MyProps> = (props):JSX.Element =>{
    const { value } = props;
    return (
        <div className="myRecord">
            <p className="myList">The time now is {value} seconds.</p>
        </div>
    )
}
export default Display;
