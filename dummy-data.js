const events = [
    {
      id: 'e1',
      title: 'A First Event',
      location: 'New York',
      description:
        'This is a first event which is a great opportunity for everyone interested in React. This is a great opportunity for everyone interested in React.',
      date: '2023-02-12',
    },
    {
      id: 'e2',
      title: 'A Second Event',
      location: 'San Francisco',
      description:
        'This is a second event which is a great opportunity for everyone interested in React. This is a great opportunity for everyone interested in React.',
      date: '2023-03-12',
    },
  ];
  
  export function getFeaturedEvents() {
    return events.filter((event) => event.date > new Date().toISOString());
  }
  
  export function getFilteredEvents(year, month) {
    const currentDate = new Date();
    const filteredEvents = events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return {
      filteredEvents,
      year,
      month,
    };
  }