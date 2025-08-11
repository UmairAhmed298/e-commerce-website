"use client"

const { useContext, createContext } = require("react");

const UserContext = createContext();

function Profile() {
  const user = useContext(UserContext);
  return <h2>{user.name}</h2>;
}

function App() {
  return (
    <UserContext.Provider value={{ name: "Ali"}}>
      <Profile />
    </UserContext.Provider>
  );
}
export default App