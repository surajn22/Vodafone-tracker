import React, { Component } from 'react'
import '../../css/style.css'
import Activity from '../Activity/Activity'
import Header from '../Header/Header';

class Activities extends Component {

  constructor(props) {
    super(props)

    this.state = {
      activities: this.props.data,
    }
  }

  render() {

    return (

      <div className="main">
        {
          this.state.activities.map((e, id) => {
            return (
              <div key={id} className="timeline-container">
                <div className="container">
                  <Header data={e} />
                </div>
                <div className="container">
                  <div className="journey">
                    <h1>Ticket Journey</h1>
                  </div>
                  <ul className="list-updates">
                    {
                      e['activities'].map((attr, index) => {
                        return (
                          <li key={attr.activityCode} className="update" ng-repeat="itembx">
                            <Activity
                              activityCode={attr.activityCode}
                              status={attr.status}
                              customerMessage={attr.customerMessage}
                              startDate={attr.activityStart.startDate}
                              endDate={attr.activityFinish.finishDate}
                              startTime={attr.activityStart.startTime}
                              endTime={attr.activityFinish.finishTime}
                            ></Activity>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>
              </div >
            );

          })
        }
      </div>
    )
  }
}
export default Activities