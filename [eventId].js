import { useRouter } from 'next/router';

export default function EventPage() {
  const router = useRouter();
  const eventId = router.query.eventId;

  // Fetch the event data using eventId
  // Display the event details

  return (
    <div>
      <h1>Event Page: {eventId}</h1>
    </div>
  )
}