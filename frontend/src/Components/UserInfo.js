import React, { Component } from "react";
import  {mainStore, isUserAuthenticated, isDataActive, getUserOtherInfo, getUserName} from '../mainStore';
// import 'materialize-css/dist/css/materialize.min.css';
class UserInfo extends Component
{
    render()
    {
        
        return(
            <div>
                <h4>UserInfo</h4>
                <div className='myContainer' style={{border:'1px solid lightgrey'}}>
                    {/* <a className='btn-floating btn-large red'>
                        <i className='material-icons'>+</i>
                    </a> */}
                    {(!isUserAuthenticated()) ? 
                        <div>
                            
                            <h5> 
                                No User has Logged in the system yet. Please log in the system using the Google Loging button 
                            </h5>
                        </div>
                        :
                        <div>
                            <h5>User Name : {getUserName()}    </h5>
                            <hr />
                            Other User Info : {getUserOtherInfo()}
                            
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default UserInfo;