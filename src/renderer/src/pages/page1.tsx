/* eslint-disable prettier/prettier */
import { Link } from 'react-router-dom'

const Page1 = (): JSX.Element => {
  return (
    <div className="container">
      <Link to="/page2">Page2</Link>
    </div>
  )
}

export default Page1
