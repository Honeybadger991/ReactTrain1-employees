import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp, onChangeSalary}) => {
    const elements = data.map(item => {
        const {id, ...restProps} = item;
        return <EmployeesListItem key={id} {...restProps} 
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        onChangeSalary={(e) => onChangeSalary(id, e.currentTarget.value.replace(/\D/g, ''))}/>
    })
    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;