import Header from "./components/Header";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="row mainContent">
          <ChatList></ChatList>
          <ChatWindow></ChatWindow>
      </div>


    </div>
  )
}

export default App;