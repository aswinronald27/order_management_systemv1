import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NewOrders from './SubSections/NewOrders';
import Onprogress from './SubSections/Onprogress';
import Completed from './SubSections/Completed';

const Orderpage = ({ orders ,clearAllOrders,updateOrder}) => {
  return (
    <Tabs>
      <TabList>
        <Tab>NewOrders</Tab>
        <Tab>Onprogress</Tab>
        <Tab>Completed</Tab>
      </TabList>

     <TabPanel>
  <NewOrders 
    orders={orders.filter(o => o.status === "new")}
    updateOrder={updateOrder}
  />
</TabPanel>

<TabPanel>
  <Onprogress 
    orders={orders.filter(o => o.status === "progress")}
    updateOrder={updateOrder}
  />
</TabPanel>

<TabPanel>
  <Completed 
    orders={orders.filter(o => o.status === "completed")}
  />
</TabPanel>

    </Tabs>
  );
}

export default Orderpage