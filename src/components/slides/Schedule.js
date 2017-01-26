import React from 'react';
import './Schedule.css';

function lookupLocation(name) {
  switch(name) {
    case 'Main Building': return 'C';
    case 'Beacon': return 'B';
    default: return 'Unknown';
  }
}

export default function Schedule({ title, events, subcontent }) {
  return (
    <div className="slide">
      <h1>{ title }</h1>
      <ul className="schedule-events">
        { events.map(event => (
            <li className="schedule-event" key={ event.content }>
              <div className="event-time">
                <div className="event-start">
                  { event.start }
                </div>
                <div className="event-end">
                  {event.end}
                </div>
              </div>
              <div className="event-content">
                { event.content }
              </div>
              <div className="event-location">
                { event.location.map(lookupLocation).join(',') }
              </div>
            </li>
          )
          ) }
      </ul>
      { subcontent &&
        <div className="schedule-subcontent">
          { subcontent }
        </div>
      }
    </div>
  );
}
