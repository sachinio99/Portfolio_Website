import React from "react";
import {useState} from "react";
import { useEffect } from 'react';
import Router from 'next/router';

async function getAccessToken(clientId: string, code: string, codeVerifier: string | null, redirectUri: string) {
    
    try {
        const response = await fetch('/api/spotify.auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ clientId, code, codeVerifier, redirectUri }),
        });
  
        if (!response.ok) {
          throw new Error('Failed to authenticate');
        }
  
        const data = await response.json();
        console.log('Access Token:', data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
        // You can now use the access token to make requests to the Spotify API
      } catch (error) {
        console.error('Error:', error);
      }

}

async function redirectToAuthFlow(clientId:string){
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);
    const http = require('http');
    const { URL } = require('url');

    let params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/music");
    params.append("scope", "user-read-private user-read-email user-top-read user-read-recently-played user-read-playback-state user-modify-playback-state user-read-currently-playing");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    const requestUrl= `https://accounts.spotify.com/authorize?${params.toString()}`;
    //const urlObj = new URL(requestUrl);

    Router.push(requestUrl)
    //document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}

function generateCodeVerifier(length: number) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;

}
async function generateCodeChallenge(codeVerifier: string) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

const startAuthFlow = async () =>{
    const clientId = "52fd6f620f884ab682e6343886ab185a";
    const code = Router.query.code as string;
    const redirectUri = "http://localhost:3000/music";
    const codeVerifier = localStorage.getItem("verifier");
  
    console.log(code);
            if(!code){
                redirectToAuthFlow(clientId);
                await getAccessToken(clientId, code, codeVerifier, redirectUri);
                console.log("getting access token", localStorage.getItem("accessToken"))    
                Router.push({
                    pathname: '/profilePage/',
                    query: { access_token: localStorage.getItem("accessToken"),
                            clientId: clientId }
                });
            }
                else{
                console.log("redirecting to auth flow");
                await getAccessToken(clientId, code, codeVerifier, redirectUri);
                console.log("getting access token", localStorage.getItem("accessToken"))
                Router.push({
                    pathname: '/profilePage/',
                    query: { access_token: localStorage.getItem("accessToken"),
                            clientId: clientId }
                });
                }
            }

const musicPage = () => {
    const [buttonClass, setButtonClass] = useState("login-button");
    return(
            <button onMouseEnter = {
                () => setButtonClass("login-button-hover") 
            } onMouseLeave={() => setButtonClass("login-button")} className = {buttonClass} onClick={startAuthFlow} >Log In Using Spotify</button>

    )
}

export default musicPage;