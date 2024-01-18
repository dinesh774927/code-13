// Write your code here
import './index.css'

const TabItem = props => {
  const {tabs, types, func} = props
  const change = () => {
    func(tabs.tabId)
  }
  const tabstyle =
    tabs.tabId === types ? ['change_color', 'change_border'] : 'para'
  return (
    <li>
      <button onClick={change} className="category" type="button">
        <p className={`para ${tabstyle[0]}`}>{tabs.displayText}</p>
      </button>
      <hr className={`${tabstyle[1]}`} />
    </li>
  )
}

export default TabItem
