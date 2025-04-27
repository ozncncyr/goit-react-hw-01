import Profile from "./components/Profile/Profile";
import friendList from "./components/FriendList/FriendList";
import userData from "./data/userData.json";
import friends from "./data/friends.json";
import React from "react";
import transactions from "./data/transactions.json";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
