import React from 'react';
import { Menu } from '../components/menu';
import { Dashboard } from '../components/dashboar';
import '../css/teacher.css';

export const Teacherpage = () => {
  return (
    <div className='container-teacher'>
      <Menu />
      <Dashboard />
    </div>
    
  );
};
