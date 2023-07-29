// Write your code here
import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="alert-heading">Alert Notifications</h1>
          <Notification>
            <div className="icon-content-container">
              <AiFillCheckCircle className="icon success" />
              <div>
                <h1 className="heading success">Success</h1>
                <p className="description">
                  You can access all the files in the folder
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="icon-content-container">
              <RiErrorWarningFill className="icon error" />
              <div>
                <h1 className="heading error">Error</h1>
                <p className="description">
                  Sorry, you are not authorized to have access to delete the
                  file
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="icon-content-container">
              <MdWarning className="icon warning" />
              <div>
                <h1 className="heading warning">Warning</h1>
                <p className="description">
                  Viewers of this file can see comments and suggestions
                </p>
              </div>
            </div>
          </Notification>
          <Notification>
            <div className="icon-content-container">
              <MdInfo className="icon info" />
              <div>
                <h1 className="heading info">Info</h1>
                <p className="description">
                  Anyone on the internet can view these files
                </p>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    )
  }
}

export default AlertNotifications
