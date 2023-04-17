import "./app-info.css";


const AppInfo = (props) => {
    const {data} = props;
    const allEmployeesQuantity = data.length;
    const increasedEmployeesQuantity = data.filter(elem => elem.increase).length
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {allEmployeesQuantity}</h2>
            <h2>Премию получат: {increasedEmployeesQuantity}</h2>
        </div>
    )
}

export default AppInfo;