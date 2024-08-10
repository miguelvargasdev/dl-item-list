import { useState } from 'react'
import { Item } from './item/item'
import { items } from './item/items'
import { ItemSection } from './item/itemSection'
import './App.css'
import { ItemCategory } from './item/enums'
import { ItemsTabs } from './item/tabs'
import { TabContent } from './item/tabContent'
import 'react-tooltip/dist/react-tooltip.css';



function App() {

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const handleTabActivation = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <>
      <h1>Item List</h1>
      <ItemsTabs activeTabIndex={activeTabIndex} handleTabActivation={handleTabActivation}></ItemsTabs>
      <TabContent activeTabIndex={activeTabIndex}></TabContent>
    </>
  )
}

export default App
