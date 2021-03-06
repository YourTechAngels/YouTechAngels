import { Link } from "react-router-dom"
import { makeStyles } from "@material-ui/core"
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
    button: {
        margin: "10px",
    },
    pInfo: {
        textAlign: "center",
    },
    divContentWrapper: {
        textAlign: "center",
        minHeight: "100%",
        paddingLeft: "50px",
    }

});

const About = () => {


    const classes = useStyles();

    return (
        <div className={classes.divContentWrapper} >
            <h1>YourTechAngels - Project HelpWhoNeeds</h1>

            <p>
                Established in 2020, Your Tech Angels is a collaborative team of 4 engineers who are involved
                and interested in technology.  Our aim is to use technology to help others especially during
                the Covid 19 pandemic.
                This is the motivation behind our HelpWhoNeeds project that assists the shielding population in
                the UK with everyday assistance such as delivering groceries or prescriptions, dog walking or
                even just a chat. The app we are building will help those who need to find a volunteer match in
                their local areas - near their vicinity based on their post code during lockdown and other
                times too.
        </p>

            <p className={classes.pInfo}> You can request Volunteer help 24x7 - <strong>0800 123 4567</strong></p>



            <Grid container

                direction="row"
                // alignItems="centre" 
                spacing={4}
                justify="center" >

                <Grid item xs={12} sm={2}>
                    <Link to={'/legal'} variant="body2">
                        Legal
               </Link> </Grid>

                <Grid item xs={12} sm={2}>
                    <Link to={`/cookie`} variant="body2">
                        Cookies
               </Link> </Grid>

                <Grid item xs={12} sm={2} >
                    <Link to={`/support`} variant="body2">
                        Support
               </Link> </Grid>

                <Grid item xs={12} sm={2}>
                    <Link to={`/termconditions`} variant="body2">
                        Terms{"&"}Conditions
               </Link> </Grid>

                <Grid item xs={12} sm={2}>
                    <Link to={`/privacy`} variant="body2">
                        Privacy
               </Link> </Grid>

            </Grid>

        </div>

    )
};


export default About;
