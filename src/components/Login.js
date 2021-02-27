import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';

import {auth, provider} from '../firebase';

function Login() {
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .catch(err => alert(err.message))
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img 
                    src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png"
                    alt=""
                />
            </div>

            <Button 
                startIcon={ 
                    <img
                        style={{
                            height: "30px",
                            paddingRight: "20px"
                        }} 
                        src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" 
                        alt=""
                    />
                }
                onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login;