import React from 'react';
import { connect } from 'react-redux';

import { ConnectedTaskList } from './TaskList';


/********  Main Component  ********/ 
export const Dashboard = ({groups}) => (
  
    <div>
        <h2>DASHBOARD</h2>
        {groups.map( group => (
           <ConnectedTaskList id={group.id} name={group.name} />
           ))}
    </div>
)

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
