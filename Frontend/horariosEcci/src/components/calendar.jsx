import React from 'react';
import '../css/calendar.css'

export const Calendar = () => {
  // Array de días de la semana
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

  // Array de números del 1 al 31
  const daysOfMonth = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <div className="calendar-container">
      <h2>Calendario</h2>
      <div className="days-of-week">
        {daysOfWeek.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
      <div className="days-of-month">
        {daysOfMonth.map((day) => (
          <div key={day} className="day">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};
