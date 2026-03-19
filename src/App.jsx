import styles from   './App.module.scss'
// import './App.scss'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <HomePage />
      <div className={styles.header}>
        <span className={styles.span}>Header </span>
      </div>
      {/* <div className={"header"}>HomePage</div> */}
    </div>
  )
}

export default App