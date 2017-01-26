import Welcome from './Welcome';
import Default from './Default';
import Schedule from './Schedule';

export default function getType(name) {
  switch(name) {
    case 'welcome': return Welcome;
    case 'schedule': return Schedule;
    default: return Default;
  }
}
