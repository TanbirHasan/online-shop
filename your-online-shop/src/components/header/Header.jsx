import { AppBar, Box, Toolbar, Typography, withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

  const useStyles = makeStyles({
      header : {
          background : '#2874F0',
          height : '55px',
      },
      logo : {
          width : '75px'
      },
      sublogo : {
          width : '20px',
          marginLeft : '4px',
      },
      container : {
          display : 'flex'
      },
      component : {
          marginLeft : '80px',
          lineHeight : '0px'
      },
      subheading :{
          fontSize : '10px',
          fontStyle : 'italic'

      }
        
    })

    const ToolBar = withStyles({
        root : {
            minHeight : 55
        }

    })(Toolbar);

const Header = () => {
    const classes = useStyles();
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  
    return (
        <AppBar className={classes.header}>
            <ToolBar >
                <Box className={classes.component}>
                    <img src={logoURL} alt="logo" className={classes.logo}/>
                   <Box className={classes.container}>

              
                <Typography className={classes.subheading}>Explore <Box component='span' style={{color : '#FFE500'}}>Plus</Box></Typography>
                <img src={subURL} alt='logo2' className={classes.sublogo}/>
                  </Box>


                </Box>
                <SearchBar />
                <HeaderButtons />
                
            </ToolBar>
        </AppBar>
    );
};

export default Header;