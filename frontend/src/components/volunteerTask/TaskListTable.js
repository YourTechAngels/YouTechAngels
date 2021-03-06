import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import moment from "moment";

const SPACED_DATE_FORMAT = "DD MMM YYYY";

const options = {
    filterType: "multiselect",
    selectableRows: "none", //can also be single/mulitple
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 20],
    print: false,
    download: false,
    sortOrder: {
        name: "start",
        direction: "asc",
    },
};

export default function TaskListTable({
    taskListData,
    isMyTask,
    handleAccept,
    handleView,
    handleReject,
    handleComplete,
}) {
    const theme = () =>
        createMuiTheme({
            overrides: {
                MuiDataTable: {
                    root: {
                        width: "min-content",
                    },
                    responsiveScroll: {
                        maxHeight: "none", //not working
                    },
                },
                MUIDataTableToolbar: {
                    root: {
                        background: "#AAF",
                    },
                },
                MUIDataTableBodyCell: {
                    root: {
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        position: "relative",
                        backgroundColor: "#FFF",
                    },
                },
            },
        });
    const taskCols = [
        {
            name: "id",
            label: "ID",
            options: {
                display: false,
                sort: false,
                filter: false,
                viewColumns: false,
            },
        },
        {
            name: "volId",
            label: "volunteer ID",            
            options: { display: false, sort: false, filter: false, viewColumns: false },
        },
        {
            name: "status",
            label: "State",         
            options: {
                display: false,
                filter: false,
                sort: false,
                viewColumns: false,
                width: "10%",
            },
        },
        {
            name: "firstName",
            label: "First name",

            options: {
                display: false,
                filter: true,
                sort: true,
            },
        },
        {
            name: "lastName",
            label: "Last name",

            options: {
                display: false,
                filter: true,
                sort: true,
            },
        },
        {
            name: "firstName",
            label: "Full Name",
            options: {
                filter: false,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => {                    
                    return (
                        <div>
                            {tableMeta.rowData[3]} {tableMeta.rowData[4]}
                        </div>
                    );
                },
            },
        },
        {
            name: "taskType",
            label: "Task",

            options: {
                filter: true,
                sort: true,
            },
        },
        {
            name: "start",
            label: "Start Time",
            options: {
                filter: false,
                sort: true,
                width: "10%",

                customBodyRender: (value) => moment(value).format("lll"),
            },
        },
        {
            name: "end",
            label: "End Time",
            options: {
                filter: false,
                sort: true,
                width: "10%",
                customBodyRender: (value) => moment(value).format("lll"),
            },
        },
        {
            name: "start",
            label: "Start Date",
            options: {
                filter: true,
                sort: true,
                display: false,
                viewColumns: false,
                customBodyRender: (value) =>
                    moment(new Date(value)).format(SPACED_DATE_FORMAT),
            },
        },
        {
            name: "end",
            label: "End Date",           
            options: {
                filter: true,
                sort: true,
                display: false,
                viewColumns: false,
                customBodyRender: (value) =>
                    moment(new Date(value)).format(SPACED_DATE_FORMAT),
            },
        },
        {
            name: "distance",
            label: "Dist(mi)",
            options: {
                filter: true,
                sort: true,
                width: "5%",
            },
        },
        {
            name: "postCode",
            label: "Postcode",
            options: {
                filter: true,
                display: false,
                viewColumns: true,
                sort: true,
                width: "5%",
            },
        },
        {
            name: "id",
            label: "Action",

            options: {
                sort: false,
                filter: false,
                viewColumns: false,
                display: isMyTask === true ? true : false,
                customBodyRender: (value, tableMeta) => {                    
                    const status = tableMeta.rowData[2];
                    return (
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"                           
                            disabled={status !== "DN" && status !== "CL" ? false : true}
                            style={{ marginLeft: 0, minWidth: "70px" }}
                            className="button"
                            value={value}
                            onClick={() => {
                                handleReject(value);
                            }}
                        >
                            {status !== "CL" ? "Reject" : "Cancelled"}
                        </Button>
                    );
                },
            },
        },
        {
            name: "id",
            label: "Confirm",

            options: {
                sort: false,
                filter: false,
                viewColumns: false,
                display: isMyTask === true ? true : false,
                customBodyRender: (value, tableMeta) => {
                    const status = tableMeta.rowData[2];
                    return (
                        <Button
                            variant="contained"
                            color="default"
                            size="small"
                            disabled={status !== "DN" && status !== "CL" ? false : true}
                            style={{ marginLeft: 0, minWidth: "90px" }}
                            className="button"
                            value={value}
                            onClick={() => {
                                handleComplete(value);
                            }}
                        >
                            {status !== "DN" ? "COMPLETE" : "DONE"}
                        </Button>
                    );
                },
            },
        },
        {
            name: "id",
            label: "Action",

            options: {
                sort: false,
                filter: false,
                viewColumns: false,
                display: isMyTask ? false : true,
                customBodyRender: (value, tableMeta) => {                    
                    const status = tableMeta.rowData[2];
                    return (
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"                            
                            disabled={status !== "OP" ? true : false}
                            style={{
                                marginLeft: 0,
                                backgroundColor: status !== "OP" ? "lightgrey" : "green",
                            }}
                            className="button"
                            value={value}
                            onClick={() => {                               
                                console.log("value");
                                console.log(value);
                                handleAccept(value);
                            }}
                        >
                            Accept
                        </Button>
                    );
                },
            },
        },
        {
            name: "id",
            label: " Task Detail",

            options: {
                filter: false,
                sort: false,
                viewColumns: false,
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{
                                marginLeft: 0,
                                minWidth: "70px",
                            }}
                            value={value}
                            onClick={(e) => {
                                handleView(e, value);
                            }}
                        >
                            View
                        </Button>
                    );
                },
            },
        },
    ];

    return (
        <MuiThemeProvider theme={theme()}>
            <MUIDataTable
                title={isMyTask === false ? "New Tasks" : "My Pending Tasks"}
                data={taskListData}
                columns={taskCols}
                options={options}
            />
        </MuiThemeProvider>
    );
}
