import express from "express";
import cors from "cors";
const app = express();
let port=3000
app.use(cors());

app.get('/',(req,res)=>{
    res.send("<body style=\"background-color:#212121\"></body>");
})

app.get('/github',(req,res)=>{
    const data=[{
        "login": "tanmay509",
        "id": 311799795,
        "node_id": "U_kgDOEpWv8w",
        "avatar_url": "https://avatars.githubusercontent.com/u/311799795?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/tanmay509",
        "html_url": "https://github.com/tanmay509",
        "followers_url": "https://api.github.com/users/tanmay509/followers",
        "following_url": "https://api.github.com/users/tanmay509/following{/other_user}",
        "gists_url": "https://api.github.com/users/tanmay509/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/tanmay509/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/tanmay509/subscriptions",
        "organizations_url": "https://api.github.com/users/tanmay509/orgs",
        "repos_url": "https://api.github.com/users/tanmay509/repos",
        "events_url": "https://api.github.com/users/tanmay509/events{/privacy}",
        "received_events_url": "https://api.github.com/users/tanmay509/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Tanmay Mondal",
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": "99% bugs, 1% ambition",
        "twitter_username": null,
        "public_repos": 6,
        "public_gists": 0,
        "followers": 2,
        "following": 3,
        "created_at": "2026-08-01T14:23:58Z",
        "updated_at": "2026-10-22T03:01:36Z"
    }];
    console.log("Sending data...");
    
    res.send(data);
})


app.listen(port,()=>{
    console.log('Server is up');
    
})
