import React, {useState} from 'react';
import {Todolist} from './Todolist';
import {v1} from 'uuid';
import '../App.css'

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

function MainTodolist() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(el => el.id !== id)})
    }

    function addTask(title: string, todolistId: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]: [newTask,...tasks[todolistId] ] })
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].map(tl => tl.id === taskId ? {...tl, isDone} : tl)})
    }

    function changeFilter(value: FilterValuesType, todolistId: string) {

        setTodolists(todolists.map(tl => tl.id === todolistId ? {...tl, filter: value} : tl))
    }


    return (
        <div className="App">
            {todolists.map(el => {
                let tasksForTodolist = tasks[el.id];
                if (el.filter === "active") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                }
                if (el.filter === "completed") {
                    tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                }
                return (
                    <Todolist
                        key={el.id}
                        TodolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={el.filter}
                    />
                )
            })}
        </div>
    );
}

export default MainTodolist;