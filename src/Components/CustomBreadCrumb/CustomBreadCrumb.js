import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './CustomBreadCrumb';
import { useNavigate } from 'react-router-dom';



export default function CustomBreadCrumb({ className, breadcrumbNames = [] }) {

  const navigate = useNavigate();

  const handleClick = (breadcrumb) => (e) =>  {
    e.preventDefault();
    const text = breadcrumb.toLowerCase()
    navigate('/projects',{state:{tabIndex : text == 'project' ? 0 : 1}})
  }

  const breadcrumbs = [
    breadcrumbNames.map((breadcrumb, index) => {
      if (index == breadcrumbNames.length - 1) {
        return (
            <Typography key="2" color="text.primary">
              {breadcrumb}
            </Typography>
        )
      } else {
        return (
            <Link underline="hover" color="inherit" key="1" href="/" onClick={handleClick(breadcrumb)} className='text-style '>
              {breadcrumb}
            </Link>
        )
      }
    })
  ];

  return (
    <Stack spacing={2} className={`mt-2 ${className} `}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}
