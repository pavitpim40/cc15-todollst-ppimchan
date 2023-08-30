// Dependencies
import './App.scss';
import { FaHome, FaInbox, FaCalendar, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import Header from '../components/Header';
import ListItem from '../components/ListItem';
import Lists from '../components/Lists';
import TodoHeader from '../components/Todo/TodoHeader';

function App() {
  // <ListItem text='Inbox' icon={<FaInbox />} active={true} />

  const generalLists = [
    { id: 1, text: 'Inbox', icon: <FaInbox />, active: true },
    { id: 2, text: 'Today', icon: <FaCalendar />, active: false },
    { id: 3, text: 'Next 7 Days', icon: <FaCalendarAlt />, active: false },
  ];

  const projectLists = [
    { id: 4, text: 'Project-A', icon: <FaInbox />, active: true },
    { id: 5, text: 'Project-B', icon: <FaInbox />, active: false },
  ];

  return (
    <div className='todo'>
      <div className='todo__header'>
        <Header />
      </div>
      <div className='todo__sidebar'>
        <aside className='sidebar'>
          <section className='sidebar__category'>
            <Lists data={generalLists} />
          </section>

          <section className='sidebar__category'>
            <div className='accordion'>
              {/* Toggle */}
              <div className='accordion__toggle'>
                <li className='accordion__item'>
                  <FaChevronDown className='accordion__item__icon accordion__item__active' />
                  <p className='accordion__item__text'>Projects</p>
                </li>
              </div>
              <Lists data={projectLists} />
            </div>
          </section>
        </aside>
      </div>
      <div className='todo__content'>
        <main className='todo__container'>
          {/* Header */}
          <TodoHeader />

          {/* CreateTodo */}

          {/* TodoLists */}
        </main>
      </div>
    </div>
  );
}

export default App;

/* 
Challenge-1 : Refactor ให้ 2 section render UI ที่...
  - OptionA (2/5) : render UI ต่างกัน <Lists/> กับ <Accordion /> 
  - OptionB (4/5) : render UI เดียวกัน เช่น <Lists />
  - OptionC (5/5) : render UI <Lists/> ภายใต้ <Accordion> <Lists/> </Accordion> 
  // ใช้ props.children
*/

/* 
 <ul className='list'>
  // #1
    {projectLists.map((obj) => (
      <ListItem key={obj.id} text={obj.text} icon={obj.icon} active={obj.active} />
    ))} 

    // #2
    {projectLists.map((obj) => {
      obj.key = obj.id;
      delete obj.id;
      return <ListItem {...obj} />;
    })}
</ul>
*/
