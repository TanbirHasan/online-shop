import React from 'react';
import { Badge, Box,Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const useStyle = makeStyles({

    login : {
        background : '#ffffff',
        color : 'black',
        textTransform : 'none',
        fontWeight : '600',
        borderRadius : '2px',
        padding : '5px 40px',
        BoxShadow : 'none'
        



    },
    wrapper : {
        margin : '0 7% 0 auto',
        display : 'flex',
        '& > *' : {
            marginRight : 50,
            fontSize : 16

        },
        alignItems : 'center',

    },
    container : {
        display : 'flex',
        marginLeft : '10px',
    }

})

const HeaderButtons = () => {
    const classes = useStyle();
    return (
       <Box className={classes.wrapper}>
           <Button variant="contained" className={classes.login}>Login</Button>
           <Typography>More</Typography>
           <Box className={classes.container}>
               <Badge badgeContent={4} color="primary">
                   <ShoppingCartIcon />
 
              </Badge>
               <Typography>
                   
                   Cart

               </Typography>
           </Box>

       </Box>
    );
};

export default HeaderButtons;