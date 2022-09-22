import "./global.css";
import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import styles from "./App.module.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="John Doe" content="Hello, world" />
          <Post author="Gabriel Doe" content="Fine" />
        </main>
      </div>
    </div>
  );
}
