import { version } from "react"
import { NetflixSeries } from "./components/NetflixSeries";
// import "./components/Netflix.css"
import styles from "./components/Netflix.module.css"
import { EventProps } from './components/EventProps.jsx'
import { Practice } from './components/Practice.jsx'
import { ToggleSwitch } from './Projects/ToggleSwitch/ToggleSwitch.jsx'
import  {ToDo} from './Projects/ToDoApp/ToDo.jsx'
export const App = (props) => {
  return (
    <section className={styles.container}>
      {/* <h1 className={styles["card-heading"]}>List Of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventProps/> */}
      {/* <ToggleSwitch /> */}
      {/* <Practice/> */}
      <ToDo/>
    </section>
  )
}
