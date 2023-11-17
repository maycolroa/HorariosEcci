import React from 'react';
import '../css/dashboar.css';
import { Calendar } from '../components/calendar';

export const Dashboard = () => {
  return (
    <div className='container-dashboard'>
      <div className='header'>
        <h1>EcciHorarios</h1>
      </div>
      <div className='container-flex' >
        <div className='calendar'>
          <h4 className='title-calendar-1'>Horarios De Clase</h4>
          <Calendar />
        </div>
        <div className='abstract'>
          <h5 className='title-abstract-1'>ing jose ramiro</h5>
          <div className='abstract-class-hours'>
            <h5 className='title-hours'>Horas por semana  </h5>
            <h5>20</h5>
          </div>
          <div className='abstract-weekly-hours'>
            <h5 >Materias por Semestre</h5>
            <h5>3</h5>
          </div>
          <div className='abstract-site'>
            <h5 >Sede</h5>
            <h5>Crisanto Luque</h5>
          </div>
        </div>
      </div>
      <div className='title-container'>
        <h1 className='title-dashboard'>Hoy tiene clase</h1>
      </div>
        <div className='time-section'>
          <div className='class-today-1'>
            <div className='class-site-1'>
              <h5 >Sede</h5>
              <h5>Crisanto Luque</h5>
            </div>
            <div className='class-hour-1'>
              <h5 >Horario de clase</h5>
              <h5>18:00-20:00</h5>
            </div>
            <div className='class-nomber-1'>
              <h5 >Asignatura</h5>
              <h5>pensamiento algoritmico</h5>
            </div>
            <div className='class-room-1'>
              <h5 >salon</h5>
              <h5>705</h5>
            </div>
          </div>
          <div className='class-today-2'>
            <div className='class-site-2'>
              <h5 >Sede</h5>
              <h5>Crisanto Luque</h5>
            </div>
            <div className='class-hour-2'>
              <h5 >Horario de clase</h5>
              <h5>20:00-22:00</h5>
            </div>
            <div className='class-nomber-2'>
              <h5 >Asignatura</h5>
              <h5>matematicas</h5>
            </div>
            <div className='class-room-2'>
              <h5 >salon</h5>
              <h5>805</h5>
            </div>
          </div>
        </div>
      
    </div>
  );
};
