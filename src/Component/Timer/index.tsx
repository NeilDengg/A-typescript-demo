import * as React from 'react';
import Display from './Display'
import RecordList from '../RecordList';
import { message } from 'antd';
import './index.css';
interface myState {
    time: number;
    running: boolean;
    step: number;
    recordActive: boolean;
    resetActive: boolean;
}

interface myProps {
}
export default class Timer extends React.Component<myProps, myState>{
    state = {
        time: 0,
        step:0.05,
        running: false,
        recordActive: false,
        resetActive: false
    }
    handleIncrement = () => {
        const { step,time } = this.state;
        this.setState({
            time : time + step
        })
    }
    interval:any = null;
    handleClickRunning = () => {
        const { running,time } = this.state
        this.setState({
            running: !running,
            recordActive: time !== 0 && running,
            resetActive: false
        },this.checkRunning);
    }
    checkRunning = () =>{
        const { time } = this.state;
        if(this.state.running) {
            this.interval = setInterval(this.handleIncrement, 50);
            message.success('计时开始');
        }
        else{
            clearInterval(this.interval);
            if(time !== 0)
            message.success(`计时成功`);
        }
    }
    handleReset = () => {
        this.setState({
            time: 0,
            running: false,
            recordActive: false,
            resetActive: true
        })
    }
    render() {
        const { time,recordActive,resetActive } = this.state;
        return (
            <div className="myTimer">
                <Display value ={time.toFixed(2)}/>
                <button onClick={this.handleClickRunning}>{this.state.running?`Stop`:`Run`}</button>
                <button onClick={this.handleReset}>Reset</button>
                    <RecordList record={time.toFixed(2)} active ={recordActive} resetActive={resetActive}/>
            </div>
        )
    }
}
