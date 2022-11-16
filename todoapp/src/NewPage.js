import React from 'react';
import Panel from './component/Panel'
import Tab from './component/Tab'




const NewPage = () => {
    return (
        <div>
            <Tab>
           <Panel title = "Ana Sayfa">1.Panel</Panel>
           <Panel title = "Ana Sayfa">2.Panel</Panel>
           <Panel title = "Ana Sayfa">3.Panel</Panel>
           <Panel title = "Ana Sayfa">4.Panel</Panel>

           </Tab>
        </div>
    );
}

export default NewPage;
