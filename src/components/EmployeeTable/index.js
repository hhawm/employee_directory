import React from 'react';
import MaterialTable from 'material-table';
import employees from "../../utils/employees.json";
import "./style.css";

export default function EmployeeTable() {
    const [state] = React.useState({
        columns: [
            {
                title: 'ID#', field: 'id', type: 'numeric', headerStyle: {
                    backgroundColor: '#039be5', color: '#FFF', fontSize: '20px', fontWeight: 'bold',
                }
            },
            {
                title: 'Name', field: 'name', headerStyle: {
                    backgroundColor: '#039be5', color: '#FFF', fontSize: '20px', fontWeight: 'bold',
                }
            },
            {
                title: 'Occupation', field: 'occupation', headerStyle: {
                    backgroundColor: '#039be5', color: '#FFF', fontSize: '20px', fontWeight: 'bold',
                }
            },
            {
                title: 'Location', field: 'location', headerStyle: {
                    backgroundColor: '#039be5', color: '#FFF', fontSize: '20px', fontWeight: 'bold',
                }
            },
            {
                title: 'Phone#', field: 'phone', headerStyle: {
                    backgroundColor: '#039be5', color: '#FFF', fontSize: '20px', fontWeight: 'bold',
                }
            },
        ],
    });

    return (
        <MaterialTable style={{ width: "70%" }}
            title="Click on column name to sort"
            columns={state.columns}
            data={
                query =>
                    new Promise((resolve, reject) => {
                        // prepare your data and then call resolve like this:
                        resolve({
                            data: employees,
                            page: 2,
                            totalCount: 15,
                        });
                    })
            }

        />
    );
}