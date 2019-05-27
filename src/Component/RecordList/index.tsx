import * as React from 'react';
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Link } from "@types/react-router-dom";
interface myProps {
    record: string;
    active: boolean;
    resetActive: boolean;
}

interface MyState {
    recordList: Array<string>;
}

interface NextProps {
    record:string;
}
export default class RecordList extends React.Component<myProps,MyState>{
    state = {
        recordList: []
    }
    componentWillReceiveProps(nextProps:Readonly<myProps>, nextContext: any): any {
        const record = {nextProps};
        const newList = `Time ${record.nextProps.record} is recorded.`;
        if(record.nextProps.active)
        this.setState({
            recordList:[...this.state.recordList,newList]
        });
        if(record.nextProps.resetActive){
            this.setState({
                recordList: []
            })
            console.log("I'm here!");
        }
    }
    render(){
        const {recordList} = this.state;
        return(
            <div>
            <div>
                {recordList.map((list,index) =>{
                return <div key={index}>{list}</div>
            })}
            </div>
            <Link to={{pathname:'/MyList', list:this.state.recordList}}>
            CheckMyList
            </Link>
            </div>        
        )
    }
}
