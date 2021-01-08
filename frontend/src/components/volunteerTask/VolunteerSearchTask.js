import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskDialog from "./TaskDetail";
import Notification from "./Notification";
import ConfirmDialog from "./CofirmDialog";
import Grid from "@material-ui/core/Grid";
import initialTasks from "./TaskListData";
import TaskListTable from "./TaskListTable";


const useStyles = makeStyles((theme) => ({
    h5: {
        color: "#4C4B51",
        textAlign: "center",
    },
}));

const intialTasks = initialTasks();
export default function VolunteerSearchTask() {
    const classes = useStyles();
    const [pendingTasks, setPendingTasks] = useState(intialTasks);
    const myTasks = pendingTasks.filter(
        (task) => task.volId !== null && task.status !== "Completed" && task.volId === 1
    );
    const unassignedTasks = pendingTasks.filter((task) => task.volId === null);

    const [showDialog, setShowDialog] = React.useState(false);
    const [dialogData, setDialogData] = React.useState(null);
    const [notifyMsg, setNotifyMsg] = useState({
        isOpen: false,
        message: " ",
        type: " ",
    });
    const [confirmDialog, setConfirmDialog] = useState({
        isOpen: false,
        title: "",
        subTitle: "",
    });

    const handleClickOpen = (e, dialogData) => {
        setShowDialog(true);
        setDialogData(dialogData);
    };

    const handleClose = () => {
        setShowDialog(false);
        setDialogData(null);
    };

    const handleView =(e, taskId) =>{
        const selectedTask = pendingTasks.find(
            (task) => task.id === taskId
        );
        console.log(selectedTask);
        if (selectedTask != null) {
            handleClickOpen(e, selectedTask);
        }
    };

    const handleReject = (taskId) => {
        setConfirmDialog({
                                    isOpen: true,
                                    title: "Are you sure to return your assigned Task?",
                                    subTitle:
                                        "Once rejected it will be unassigned from you.To reassign the task you need to go to search task and accept it again.",
                                    onConfirm: () => {
                                        setConfirmDialog({
                                            ...confirmDialog,
                                            isOpen: false,
                                        });
                                        const returnTask = pendingTasks.map((task) =>
                                            task.id === taskId ? { ...task, volId: null, status:"Open" } : task
                                        );
                                        setPendingTasks(returnTask);
                                        console.log("myTask");
                                        console.log(myTasks);
                                        console.log("assignTasks");
                                        console.log(unassignedTasks);
                                        console.log(pendingTasks);

                                        setNotifyMsg({
                                            isOpen: true,
                                            message: "Task is unssigned from you",
                                            type: "warning",
                                        });
                                    },
                                });
    }

    const handleAccept=(taskId) =>{
        setConfirmDialog({
            isOpen: true,
            title: "Do you agree to accept this task?",
            subTitle:
                "Once accepted it will be assigned to you.To return the task you need to go to your task list and reject it.",
            onConfirm: () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false,
                });
                
                const assignTask = pendingTasks.map((task) =>
                    task.id === taskId ? { ...task, volId: 1 ,status:"Assigned" }: task
                );
                setPendingTasks(assignTask);
                console.log("assignTasks");
                console.log(unassignedTasks);
                console.log("myTask");
                console.log(myTasks);
                console.log(pendingTasks);
                setNotifyMsg({
                    isOpen: true,
                    message: "Task is successfully assigned to you.",
                    type: "success",
                });
            },
        });
    }

    const handleComplete=(taskId) =>{
        setConfirmDialog({
            isOpen: true,
            title: "Have you completed this task?",
            subTitle:
                "Once completed it will be marked as done will be removed from your list.",
            onConfirm: () => {
                setConfirmDialog({
                    ...confirmDialog,
                    isOpen: false,
                });
                
                const assignTask = pendingTasks.map((task) =>
                    task.id === taskId ? { ...task, status:"Completed" } : task
                );
                setPendingTasks(assignTask);
                console.log("assignTasks");
                console.log(unassignedTasks);
                console.log("myTask");
                console.log(myTasks);
                console.log(pendingTasks);
                setNotifyMsg({
                    isOpen: true,
                    message: "Task is successfully matked as done",
                    type: "success",
                });
            },
        });
    }
    return (
        <React.Fragment>
            <div style={{ height: "100%" }}>
                <Grid id="start-time" container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <h4 className={classes.h5}>{"My Assigned Tasks"}</h4>                      
                        <TaskListTable taskListData={myTasks} isMyTask={true} 
                        handleAccept={handleAccept} handleReject={handleReject} handleView={handleView} handleComplete= {handleComplete}  />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <h4 className={classes.h5}>{"Search New Tasks"}</h4>                       
                        <TaskListTable taskListData={unassignedTasks} isMyTask={false} 
                        handleAccept={handleAccept} handleReject={handleReject} handleView={handleView} handleComplete= {handleComplete}  />
                    </Grid>
                </Grid>

                <TaskDialog
                    open={showDialog}
                    handleClose={handleClose}
                    title="Task Summary"
                    data={dialogData}
                />
                <Notification notify={notifyMsg} setNotify={setNotifyMsg} />
                <ConfirmDialog
                    confirmDialog={confirmDialog}
                    setConfirmDialog={setConfirmDialog}
                />
            </div>
        </React.Fragment>
    );
}