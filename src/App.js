import React, { Component } from "react";
// import EmployeeCard from "./components/EmployeeCard";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./utils/employees.json";

class App extends Component {
    // Setting this.state.employees to the employees json array
    state = {
        employees
    };

    // Map over this.state.employees and render a employeeCard component for each employee object
    render() {
        return (
            <Wrapper>
                <Title>React Employee Directory List</Title>
                <EmployeeTable />
            </Wrapper>
        );
    }
}

export default App;
