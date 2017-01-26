module.exports = [
  {
    type: 'welcome',
    content: 'Welcome to FBC Waterloo',
  },
  {
    type: 'schedule',
    title: 'Sunday Schedule',
    events: [
      {
        start: '8:45 am',
        end: '9:40 am',
        location: [ 'Main Building' ],
        content: 'Sunday School',
      },
      {
        start: '10:00 am',
        end: '11:15 am',
        location: [ 'Beacon' ],
        content: 'Contemporary Worship',
      },
      {
        start: '10:00 am',
        end: '11:15 am',
        location: [ 'Main Building' ],
        content: 'Traditional Worship',
      },
      {
        start: '6:00 pm',
        end: '6:45 pm',
        location: [ 'Main Building' ],
        content: 'Evening Worship',
      },
    ],
    subcontent: 'This is a normal schedule, changes will be announced'
  },
  {
    type: 'weekly-activity',
    content: {
      image: 'teamkidd.png',
      title: 'Wednesdays',
      start: 'After School',
      end: '6:30pm',
      poc: 'Rita Trantham',
    },
  },
  {
    type: 'weekly-schedule',
    content: {
      title: 'Youth and Student Activities',
      events: [
        { day: 'Sunday', start: '4:30pm', title: 'Youth Prayer' },
        { day: 'Wednesday', start: '2:45pm', title: 'Student Activity Time' },
      ],
      subtitle: 'Questions: Contact Pastor Daryl',
      poc: 'Daryl',
    },
  },
  {
    type: 'event',
    content: {
      title: "ROMEO's",
      subtitle: 'Retired Old Men Eating Out',
      date: 1485266400000,
      location: "Denny's",
      poc: null,
    },
  },
  {
    type: 'weekly-activity',
    content: {
      image: null,
      title: 'CAST',
      subtitle: 'Crafting Angels Sharing Together',
      day: 'Tuesday',
      start: '9:00am',
      end: '2:30pm',
      poc: null,
    },
  },
  {
    type: 'birthday',
    content: {
      image: null,
      title: 'This Weeks Birthdays',
      content: [
        { day: '23rd', people: [ 'Jo Ann Phillips', 'Vickie Woodrome' ] },
        { day: '24th', people: [ 'Pastor Steve Neill', 'Sophie Rudloff' ] },
      ]
    },
  },
  {
    type: 'contact-list',
    content: {
      image: null,
      title: 'Call',
      subtitle: '',
      content: [
        { name: 'Jim Trantham', phone: '555-555-7015' },
      ]
    },
  },
];
