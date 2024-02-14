const notificationStyles = {
    mainContainer : {
        width: "100%",
        height: '100vh'
    },

    childContainer : {
        width: "90%",
        margin: "auto",
        border: "2px solid red",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },

    notificationText : {
        fontSize: "30px",
        fontWeight: "700",
        textAlign: "center",
        mt:5
    },

    formBoxContainer : {
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        flexGrow: "1"

    },

    form : {
        border: "2px solid red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
        gap: "50px"
    },

    textField : {
        width: "300px"
    }
}

export default notificationStyles