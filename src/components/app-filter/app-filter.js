import { Component } from "react";

import "./app-filter.css";

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            all: true,
            rised: false,
            bigSalary: false,
        }
    }

    onUpdateFilter = (e) => {
        let all = false;
        let rised = false;
        let bigSalary = false;
        if(e.target.name === 'all') {all = true}
        if(e.target.name === 'rised') {rised = true}
        if(e.target.name === 'bigSalary') {bigSalary = true}
        this.setState({all, rised, bigSalary})
        this.props.onUpdateFilter({all, rised, bigSalary})
    }

    render() {
        return (
            <div className="btn-group">
                <button type="button"
                        name="all"
                        className={this.state.all ? "btn btn-light" : "btn btn-outline-light"}
                        onClick={this.onUpdateFilter}>
                        Все сотрудники
                </button>
                <button type="button"
                        name="rised"
                        className={this.state.rised ? "btn btn-light" : "btn btn-outline-light"}
                        onClick={this.onUpdateFilter}>
                        На повышение
                </button>
                <button type="button"
                        name="bigSalary"
                        className={this.state.bigSalary ? "btn btn-light" : "btn btn-outline-light"}
                        onClick={this.onUpdateFilter}>
                        З/П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;

// import "./app-filter.css";

// const AppFilter = () => {
//     return (
//         <div className="btn-group">
//             <button type="button"
//                     className="btn btn-light">
//                     Все сотрудники
//             </button>
//             <button type="button"
//                     className="btn btn-outline-light">
//                     На повышение
//             </button>
//             <button type="button"
//                     className="btn btn-outline-light">
//                     З/П больше 1000$
//             </button>
//         </div>
//     )
// }

// export default AppFilter;