import React from "react";
import {useState} from "react";
import { useEffect } from 'react';
import {useRouter} from 'next/router';
import { GetServerSideProps } from 'next';
import UserProfile, { TopArtists } from "../src/classes/UserProfile";
import { get } from "http";


const userTopArtists: TopArtists = {
    items: [],
    total: 0,

    limit: 0,
    offset: 0,
    previous: "",
    next: ""
}

const userProfile: UserProfile = {
    country: "",
    display_name: "",
    email: "",
    explicit_content: {
        filter_enabled: false,
        filter_locked: false
    },
    external_urls: {
        spotify: ""
    },
    followers: {
        href: "",
        total: 0
    },
    href: "",
    id: "",
    images: [],
    product: "",
    type: "",
    uri: "",
    topArtists: userTopArtists
}


async function getTopTracks(params: { accessToken: any; }) {

 
}

function populateProfileUI(profile:any){

}

async function getProfileData(params: {token:any }): Promise<any> {
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            'Authorization': 'Bearer ' + params.token
        }
    });
    const data = await response.json();
    userProfile.country = data.country;
    userProfile.display_name = data.display_name;
    userProfile.email = data.email;
    userProfile.external_urls = data.external_urls;
    //userProfile.followers = data.followers;

    return data;
}

/*
Cant use router within server side props
*/

const ProfilePage = () => {
    const router = useRouter();

    getProfileData({token:router.query.acess_token }).then(() => {
    
    
        return (
            <div>
              <h1>User Profile</h1>
              <p><strong>Display Name:</strong> {userProfile.display_name}</p>
              <p><strong>Email:</strong> {userProfile.email}</p>
              <p><strong>Country:</strong> {userProfile.country}</p>
              
              {userProfile.images.length > 0 && (
                <img
                  src={userProfile.images[0].url}
                  alt="Profile"
                  style={{ height: '100px', width: '100px' }}
                />
              )}
              
              {/* Additional details can be added here */}
            </div>
          );

    
  });
}
  
export default ProfilePage;