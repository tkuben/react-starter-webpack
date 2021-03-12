const styles = (theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        padding: theme.spacing(3),
    },
    paper: {
        padding: theme.spacing(4),
        maxWidth: 400,
    },
    submitButton: {
        marginTop: '16px'
    },
    logoContainer: {
        textAlign: 'center'
    },
    logo: {
        height: '60px'
    },
    loginDivider: {
        marginTop: "32px",
        marginBottom: "32px",
        textAlign: 'center',
        '& div': {
            padding: '0px',
            height: '10px'
        },
        '& span': {
            position: 'relative',
            top: '-20px',
            background: '#fff',
            padding: '10px'
        }
    },
    socialLogin: {
    },
    facebookLogin: {
        width: '100%',
        height:'35px', 
        borderRadius: '4px',
        background: '#3b5998',
        color:'white',
        border:'0px transparent',
        textAlign: 'center',
        margin:'5px',
        display: 'inline-block',
        cursor: 'pointer',
    },
    googleLogin: {
        justifyContent: 'center',
        width: '100%',
        height:'35px', 
        borderRadius: '4px',
        background: '#3b5998',
        color:'white',
        border:'0px transparent',
        textAlign: 'center',
        margin:'5px',
        display: 'inline-block',
        '& div': {
            padding: '5px !important',
            marginTop: '4px !important'
        },
        cursor: 'pointer',
    },
    socialIcon: {
    }

});

export default styles;
