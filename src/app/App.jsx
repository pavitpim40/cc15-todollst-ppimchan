// Dependencies
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaCalendarAlt } from 'react-icons/fa';
import Header from '../components/Header';
import ListItem from '../components/ListItem';

function App() {
  return (
    <div className='todo'>
      <div className='todo__header'>
        <Header />
      </div>
      <div className='todo__sidebar'>
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <ul className='list'>
              <ListItem text='Inbox' icon={<FaInbox />} active={true} />
              <ListItem text='Today' icon={<FaCalendar />} active={false} />
              <ListItem text='Next 7 Days' icon={<FaCalendarAlt />} active={false} />
            </ul>
          </section>
          <section className='sidebar__category'>
            <ul className='lists'>
              <ListItem text='Project-A' icon={<FaInbox />} active={true} />
              <ListItem text='Project-B' icon={<FaInbox />} active={false} />
            </ul>
          </section>
        </aside>
      </div>
      <div className='todo__content'>TodoContent</div>
    </div>
  );
}

export default App;
