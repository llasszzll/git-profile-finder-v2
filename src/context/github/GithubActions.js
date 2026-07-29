import axios from 'axios'

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL || 'https://api.github.com';

const github = axios.create({
    baseURL: GITHUB_URL,
})

//Get Search Results
export const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q: text,
    });
 const response =await github.get(`/search/users?${params}`)
 return response.data.items
  };

  //Get User and Repos

  export const getUserAndRepos = async(login) => {
    const [user, repos] = await Promise.all ([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return { user: user.data, repos: repos.data }
  }