import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import Assigned from './UserSubSections/Assigned';
import Completed from './UserSubSections/Completed';

const UserOrderSection = () => {
  return (
    <Tabs>
        <TabList>
          <Tab>Assigned </Tab>
          <Tab>Completed</Tab>
        </TabList>
    
      <TabPanel> <Assigned/></TabPanel>
      <TabPanel> <Completed/> </TabPanel>
    
    </Tabs>
  )
}

export default UserOrderSection