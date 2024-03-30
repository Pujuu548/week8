import EventSearch from '../events/EventSearch';

function MainHeader() {
  return (
    <header className="main-header">
      <div className="main-header__logo">
        <h1>Next Event</h1>
      </div>
      <nav className="main-header__nav">
        <ul>
          <li>
            <EventSearch />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;