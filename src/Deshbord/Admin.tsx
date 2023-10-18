import './Deshbord.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListIcon from '@mui/icons-material/List';
import {useState} from 'react'
import { Routes,Route,useNavigate } from 'react-router-dom';
import StudentList from './Studentlist';
import CourseForm from './CourseForm';
import Coursename from './Coursename';
import CourseDetail from './CourseDetail';


const drawerWidth = 240;

interface Props {

  window?: () => Window;
}

export default function Admin(props: Props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let [text,settext]=useState([{
    name:"Student List",
    Routerurl:"StdList",
    
  },
  {
name:"Course Form",
Routerurl:"CourseForm"

  },
  {
    name:"Course Name",
    Routerurl:"Coursename"
    
  },

  {
    
    Routerurl:"Coursedetail"
    
  },



])
let Navigate = useNavigate()

let openPage = (Routerurl:any)=>{
Navigate(`/Admin/${Routerurl}`)
}


  const drawer = (
    <div className='Deshbord'>
        <h1>Admin</h1>
      <Toolbar />
      <Divider />
      <List>
        {text.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={()=>openPage(text.Routerurl)}>
            
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
  
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        

        <Routes>
            <Route path="StdList" element={<StudentList/>}/>
            <Route path ="CourseForm" element={<CourseForm/>}/>
            <Route path ="Coursename" element={<Coursename/>}/>
            <Route path="Coursedetail/:id" element={<CourseDetail/>}/>
        </Routes>
      </Box>
    </Box>
  );
}
