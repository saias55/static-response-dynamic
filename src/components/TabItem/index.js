import './index.css'

const TabItem = props => {
  const {tabDetails, changingInitial, isActive} = props
  const {displayText, tabId} = tabDetails
  const textDecoration = isActive ? 'text-decoration' : null

  const changingTabs = () => changingInitial(tabId)

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${textDecoration}`}
        onClick={changingTabs}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
