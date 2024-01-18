import Styles from '../../Styles/loginpage.module.css'
import Leftbox from './Components/Leftbox'
import Rightbox from './Components/Rightbox'


function page() {
  return (
    <div className={Styles.container}>
      <Leftbox/>
      <Rightbox/>
    </div>
  )
}

export default page