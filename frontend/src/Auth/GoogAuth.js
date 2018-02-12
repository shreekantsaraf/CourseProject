import  { auth, provider } from './firebase';
import  {mainStore} from '../mainStore';
import getDataDB from '../Data/Data';
// class Authenticator
// {
    export  default function LoginUsingFireBase()
    {
        console.log('In GoogAuth.js.:LoginUsingFireBase REACT_APP_GOOGLE_KEY is ', process.env.REACT_APP_GOOGLE_KEY);
        console.log('GoogAuth::Login function - Google Authentication started .... time is - ', Date.now() )
        auth.signInWithPopup(provider)
        .then(
            (result) => {
                var retObj = 
                {
                    "name" : result.user.displayName,
                    "uid" : result.user.uid,
                };
                mainStore.dispatch({type: 'USER_LOGIN', payLoad: retObj } );
                console.log('GoogAuth::Login function - user is - ', retObj, ' time is - ', Date.now() );
                
                getDataDB();
            }
            );
        // var result = async auth.signInWithPopup(provider);
        // await mainStore.dispatch({type: 'USER_LOGIN',payLoad: result.user});
        
    }
// }
// export default Authenticator;

export function LogoutUsingFireBase()
{
    console.log('In GoogAuth.js.:LogoutUsingFireBase REACT_APP_GOOGLE_KEY is ', process.env.REACT_APP_GOOGLE_KEY);
    
      auth.signOut().then(()=> {
        mainStore.dispatch({type: 'USER_LOGIN',payLoad:false});
       // mainStore.dispatch({type: 'DATA_READY',payLoad:[]});
        mainStore.dispatch({type: 'FORM_SELECTION_CHANGED',payLoad:0});
        console.log('in export function Logout()-- after Logged out ');
      });
}


export  function Login2()
{
    fetch('http://courseproject2017.azurewebsites.net/auth/login/google', {
        //mode: 'no-cors',
        method: "GET",
        headers: {
            'Accept': 'application/json',
                      'Content-Type': ' application/json',
                      'X-API-SERVER': '85499f9f'
                  },
      }).then(response => {
                response.text();
                console.log(response);
            }
        )      // 1
          .then(json => {                    // 2
               console.log("typeof json: " + typeof json);
               console.log(json);
               })
          .catch(error => {                  // 3
           console.log(error);
          });
}

export function myLogin()
{

    //var myHeaders = headers: {'X-My-Custom-Header': 'Header-Value'}
    
    var myInit = { method: 'GET',
                   headers: {'X-My-Custom-Header': 'Header-Value'},
                   mode: 'cors',
                   cache: 'default' };
    
    fetch('https://localhost:44318/api/Auth3', myInit)

    // fetch('http://localhost:50206/SignIn'
    // , {
    //     mode: 'cors',
    //     method: "GET",
    //     headers: {
    //         'Accept': 'application/json',
                      
    //                   'X-API-SERVER': '85499f9f'
    //               },
    //   })
      .then(response => {
                response.text();
                console.log(response);
            }
        )      // 1
          .then(json => {                    // 2
               console.log("typeof json: " + typeof json);
               console.log(json);
               })
          .catch(error => {                  // 3
           console.log(error);
          });
}