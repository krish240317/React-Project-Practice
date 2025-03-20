import { version } from "react"
import { NetflixSeries } from "./components/NetflixSeries";
// import "./components/Netflix.css"
import styles from "./components/Netflix.module.css"
import { EventProps } from './components/EventProps.jsx'
import { Practice } from './components/Practice.jsx'
import { ToggleSwitch } from './Projects/ToggleSwitch/ToggleSwitch.jsx'
import { ToDo } from './Projects/ToDoApp/ToDo.jsx'
import { RegistrationForm } from './hooks/useState/RegistrationForm.jsx'
import { LoginForm } from "./hooks/useState/loginform.jsx";
import { ContactForm } from "./hooks/useState/ContactForm.jsx";
import { CleanUp } from './hooks/useEffect/CleanUp.jsx'
import { HowNotToFechApi } from './hooks/useEffect/howNotToFechApi.jsx'
import { Pokemon } from './hooks/useEffect/Pokemon.jsx'
import { UseRef } from "./hooks/useRef/UseRef.jsx";
import { Home } from "./hooks/ContexApi/Home.jsx";
import { BioProvider } from "./hooks/ContexApi/index.jsx";
import { LightProvider, ToggleTheam } from "./hooks/ContexApi/DarkLight.jsx";
import {UseMemo2} from './hooks/Memo/useMemo2.jsx'

export const App = (props) => {
  return (
    <section className={styles.container}>
      {/* <h1 className={styles["card-heading"]}>List Of Best Netflix Series</h1> */}
      {/* <NetflixSeries /> */}
      {/* <EventProps/> */}
      {/* <ToggleSwitch /> */}
      {/* <Practice/> */}
      {/* <ToDo/> */}
      {/* <RegistrationForm/> */}
      {/* <LoginForm/> */}
      {/* <ContactForm/> */}
      {/* <CleanUp/> */}
      {/* <HowNotToFechApi/> */}
      {/* <Pokemon/> */}
      {/* <UseRef/> */}

      {/* <BioProvider>
        <Home />
      </BioProvider> */}

      {/* <LightProvider>
        <ToggleTheam/>
      </LightProvider> */}
      <UseMemo2/>
    </section>
  )
}
