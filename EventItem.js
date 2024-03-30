import Link from 'next/link';
import Button from '../ui/Button';

export default function EventItem(props) {
  const { id, title, location, date } = props;

  const exploreLink = `/events/${id}`;

  return (
    <li className="event-item">
      <div className="event-item__description">
        <h2>{title}</h2>
        <time datetime={date}>{date}</time>
      </div>
      <div className="event-item__actions">
        <Button link={exploreLink}>Explore Event</Button>
      </div>
    </li>
  );
}