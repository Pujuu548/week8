import Button from '../ui/Button';

const EventSearch = (props) => {
  const { onSearch } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement search functionality
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventSearch;