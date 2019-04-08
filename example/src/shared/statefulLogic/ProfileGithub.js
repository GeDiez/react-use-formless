import { useState, useEffect } from 'react';

function fetchProfile(user) {
  return fetch(`https://api.github.com/users/${user}`)
    .then(res => res.json())
    .then(res => ({
      name: res.name,
      username: res.login,
      avatar: res.avatar_url,
      url: res.html_url,
      bio: res.bio
    }))
}

const profileSchema = {
  name: '',
  username: '',
  avatar: '',
  url: '',
  bio: '',
}

export function useProfile(user) {
  const [profile, setProfile] = useState(profileSchema)

  useEffect(function() {
    fetchProfile(user)
      .then(function (profile) {
        setProfile(profile)
      })
  }, [user])

  return profile;
}