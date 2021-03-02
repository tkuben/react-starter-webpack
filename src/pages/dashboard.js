import React from 'react'
import style from 'Styles/dashboard.scss'

import Button from '@material-ui/core/Button';


const Dashboard = () => {
    return (
        <div className={style.dashboard}>
            <Button variant="contained" color="secondary">
                Dashboard
            </Button>
        </div>
    )
}

export default Dashboard;