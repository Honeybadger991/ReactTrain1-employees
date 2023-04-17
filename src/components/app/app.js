import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3}
            ],
            term: '',
            all: true,
            rised: false,
            bigSalary: false,
        }
        this.maxId = 4;
    }


    onToggleProp = (id, prop) => { 
        this.setState(({data}) => ({
          data: data.map(elem => {
            if (elem.id === id){
                return{...elem, [prop]: !elem[prop]}
            }
            return elem;
          })
        }))
    }

    onChangeSalary = (id, sal) => { 
        this.setState(({data}) => ({
          data: data.map(elem => {
            if (elem.id === id){
                return{...elem, salary: sal}
            }
            return elem;
          })
        }))
    }
    


    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name: name, 
            salary: salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    searchEmp = (itemss, term, all, rised, bigSalary) => {
        const items = this.filterEmp(itemss, all, rised, bigSalary);
        if (term.length === 0){
            return items;
        }

       return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmp = (items, all, rised, bigSalary) => {
        if (all){
            return items;
        }
        if (rised){
            return items.filter(item => {
                return item.rise
            })
        }
        if (bigSalary){
            return items.filter(item => {
                return item.salary > 1000
            })
        }
    }

    onUpdateFilter = (all, rised, bigSalary) => {
        this.setState(all, rised, bigSalary);
    }



    render() {
        const {data, term, all, rised, bigSalary} = this.state;
        const visibleData = this.searchEmp(data, term, all, rised, bigSalary)
        return (
            <div className="app">
                <AppInfo data={data}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    onUpdateFilter={this.onUpdateFilter}/>
                </div>
                
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onChangeSalary={this.onChangeSalary}/>
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;
