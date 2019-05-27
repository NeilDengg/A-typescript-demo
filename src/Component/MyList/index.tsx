import React from 'react';
import { RouteProps } from 'react-router';
import './index.css';
import {Input,Button} from 'antd';

interface myLocation {
    hash: string;
    key: string;
    list?: Array<string>;
    pathname: string;
    search: string;
}

interface MyProps {
    list?: Array<string>;
    location: myLocation;
}

interface myState {
    todoList: Array<string>;
    todo: Array<string>;
}

export default class MyList extends React.Component<MyProps & RouteProps,myState>{
    constructor(props: Readonly<MyProps & RouteProps & myLocation>) {
        super(props);
        this.state = {
            todoList: [],
            todo: []
        }
    }
    list = [];
    updatetodo = (value:string,index: number) => {
        let newToDo = this.state.todo;
        if(newToDo.length<=index){
            while(newToDo.length<index){
                newToDo.push('');
            }
            newToDo.push(value);    
        }
        else newToDo[index] = value;
        this.setState({
            todo: newToDo
        })    
    }
    addToDoToList = (e:React.MouseEvent<HTMLElement>):void => {
        let button = e.target as HTMLInputElement;
        const index = Number(button.value);
        const todo:string = this.state.todo[index];
        let newToDo = this.state.todoList;
        if(newToDo.length<=index){
            while(newToDo.length<index){
                newToDo.push('');
            }
            newToDo.push(todo);    
        }
        else newToDo[index] = todo;
        this.setState({
            todoList: newToDo
        })
    }
    render(){
        const {todoList} = this.state;
        const {list} = this.props.location!
        return (list === undefined? <div>No record in store!</div> : 
        <div>{(list as Array<string>).map((item,index) => {
            return <div key = {index} className="TimeList">
                    <div >{item}</div>
                    <div>{todoList[index]!}</div>
                    <Input key={index} defaultValue={this.state.todoList[index]} onChange={e => this.updatetodo(e.target.value,index)} />
                    <button onClick={this.addToDoToList} value={index}>Set</button>
                </div>
        })}
        </div>
        )
    }
}