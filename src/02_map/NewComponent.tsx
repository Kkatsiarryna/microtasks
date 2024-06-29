import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}


type NewComponentType = {
    // students: Array<StudentType>
    students: StudentType[]
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <ul>
            {/*           {props.students.map(students  => {
                return (
                    <li key={students.id}> {students.name} {students.age}</li>
                )
            })
            }*/}
            {/*{props.students.map(students  => <li key={students.id}> {students.name} {students.age}</li> )}*/}
            {props.students.map((objectFromStudentArray, index) => {
                return (
                    <li key={objectFromStudentArray.id}>
                        <span>{objectFromStudentArray.name}</span>
                        <span> age: {objectFromStudentArray.age}</span>
                    </li>
                )
            })}

        </ul>
    );
};

type CarType = {
    manufacturer: string
    model: string

}

type NewComponent2Type = {
    cars: CarType[]
}

export const NewComponent2 = (props: NewComponent2Type) => {
    return (
        <table>
                    <tr>
                        <th>Number</th>
                        {/*               <th>Manufacturer</th>
                        <th>Model</th>*/}
                        {Object.keys(props.cars[0]).map(key => <th>{key}</th>)
                        }
                    </tr>
            {props.cars.map((objectCars, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{objectCars.manufacturer}</td>
                        <td>{objectCars.model}</td>
                    </tr>
                )
            })}

        </table>
    )
}