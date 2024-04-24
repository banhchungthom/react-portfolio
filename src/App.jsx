import styles from './style'
import { NavBar, Projects, Footer, Testimonials, Hero } from './components';
const App = () => (
      <div className= "bg-teal-500 w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <NavBar />
          </div>
        </div>
        <div className={`bg-teal-500 ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />

          </div>
        </div>
        <div className={`bg-teal-500 ${styles.paddingX} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Projects />
            <Testimonials /> 
          </div>
        </div>
        <Footer /> 
      </div>
)

export default App;
