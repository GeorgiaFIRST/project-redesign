import { AxiosError, AxiosResponse } from "axios";

const axios = require('axios');

const GRAPHQL_ENDPOINT:string = "http://dev.hayden.gg:1337/graphql";


function createPost(title: string, body: string) {
    let mutation = `
    mutation {
        createPost (input: {data: {Title:\"${title}\", Body:\"${body}\"}}) {
          post {
            id
            Body
            Title
            published_at
          }
        }
      }
    `
    return mutateFromHoney(mutation);
}

function mutateFromHoney(mutation) {
  console.warn("Server should not mutate graphql data from Honey in production.")
  let mutationPromise = new Promise((resolve, reject) => {
    axios.post(`${GRAPHQL_ENDPOINT}`, { query: mutation }, {headers: { "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODc2ODY4MDI4NjI2MTYzZTU0NmIyYiIsImlhdCI6MTYxOTQ4NzEzMSwiZXhwIjoxNjIyMDc5MTMxfQ.MjoGQwNDM-SB2E2xuYbYJZJnDLTt-3ce2CJWj-dkCDs"}})
    .then((res: AxiosResponse) => {
      resolve(res.data);
    })
    .catch((err: AxiosError) => {
        resolve(err);
    })
    .then(() => {
        
    })
  })
  return mutationPromise;
} 


function queryFromHoney(query: any) {
    let queryPromise = new Promise((resolve, reject) => {
        axios.post(`${GRAPHQL_ENDPOINT}`, { query: query }, {headers: {"Content-Type": "application/json"}})
        .then((res: AxiosResponse) => {
            resolve(res.data);
        })
        .catch((err: AxiosError) => {
            resolve(err);
        })
        .then(() => {
            
        })
    })
    return queryPromise;
}

function getPosts() {
  return queryFromHoney(`{
      posts {
          id
          Body
          Title
          published_at
      }
    }
    `);
  };

exports.queryFromHoney = queryFromHoney;
exports.getPosts = getPosts;
exports.mutateFromHoney = mutateFromHoney;
exports.createPost = createPost;

/*
To use:

const fetchHoney = require("../fetch-honey");
fetchHoney.getPosts().then((res) => {
        console.log(res.data.posts)
});
*/