// Write your code here
import './index.css'

const AppItem = props => {
  const {app} = props

  return (
    <li className="app_container">
      <img className="app_image" alt={app.appName} src={app.imageUrl} />
      <p className="app_name">{app.appName}</p>
    </li>
  )
}

export default AppItem
