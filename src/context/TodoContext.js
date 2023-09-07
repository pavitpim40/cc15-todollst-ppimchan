import { createContext } from 'react';

// ชื่อ Context => ใช้ทั้ง Provider, Consumer
const TodoContext = createContext();

// SetUp Context ฝั่ง Provider
function TodoContextProvider(props) {
  const sharedObj = { value: 60 };

  return <TodoContext.Provider value={sharedObj}>{props.children}</TodoContext.Provider>;
}

export default TodoContextProvider;
export { TodoContext };
