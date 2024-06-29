import React, {useState} from 'react';
import './App.css';
import { Body } from './01_site/Body';
import { Header } from './01_site/Header';
import {Footer} from './01_site/Footer';
import { NewComponent, NewComponent2 } from './02_map/NewComponent';
import {Button} from './03_button/Button';
import {UseStateComponent} from './04_UseState/UseStateComponent';
import {FilterComponent} from './05_filter/FilterComponent';
import {FirstFilterComponent} from './05_filter/FirstFilterComponent';
import {FullInput} from "./06_input/FullInput";
import {InputUniversal} from "./06_input/InputUniversal";
import {ButtonUniversal} from "./06_input/ButtonUniversal";

function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]
    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]
    const Button1Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age);
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }
    const Button3Foo = () => {
        console.log('I am stupid button');
    }

    //input

    const [message, setMessage] = useState([ //глобальный стейт
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const addMessage = (title: string) => {
        console.log(title);
/*        let newMessage = {message: 'message6'};
        setMessage([newMessage, ...message]);*/
        setMessage([{message: title}, ...message]);


    }
    //две компоненты(Input, Button)
    let[title, setTitle] = useState('');
    const callbackButtonHandler = () => {
        addMessage(title);
        setTitle("");
    }

  return (
      <>
      {/*<Header title={'new header'}/>
        <Body title={'new body'}/>
        <Footer title={'new footer'}/>*/}
      {/*        <NewComponent students={students}/>
        <NewComponent2 cars={topCars}/>
        <Button name={'YoutubeChanel-1'} callBack={()=> Button1Foo('Button1Foo', 21)}/>
        <Button name={'YoutubeChanel-2'} callBack={()=> Button2Foo('Button2Foo')}/>
        <Button name={'YoutubeChanel-3'} callBack={ Button3Foo}/>
        <UseStateComponent/>
        <FirstFilterComponent/>*/}

      {/*input*/}
          {/*<FullInput addMessage={addMessage}/>*/}
          <InputUniversal setTitle = {setTitle} title = {title}/>
          <ButtonUniversal name={"+"} callBack={callbackButtonHandler}/>
      {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
      })}
</>
)
    ;
}

export default App;
