// Axios  https://github.com/axios/axios

let btn = document.querySelector('#btn');
let div = document.querySelector('#app');

btn.onclick = function(){
    // Limpa a div
    div.innerHTML = '';

    // criar o span
    let spanNome = document.createElement('span');

    // Criar o txtNome
    let txtNome = ''

    // Recupera o input
    let github_user = document.querySelector('input[name=github_user]');
    let user = github_user.value;

    // Limpando o input
    github_user.value = '';

    // GET, POST, PUT, DELETE
    /*  
    Performing a POST request

    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
        
    */
    axios.get(`https://api.github.com/users/${user}`)
        .then(function(response){
            if(response.data.name !== null){ // response.data.avatar_url
                txtNome = document.createTextNode(response.data.name);

                let img = document.createElement('img');
                img.setAttribute('src', response.data.avatar_url);
                img.setAttribute('alt', response.data.name);
                img.setAttribute('width', '45px');
                img.setAttribute('height', '45px');

                div.appendChild(img);

                // análise da resposta
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.statusText);
                console.log(response.headers);
                console.log(response.config);
            }else{
                txtNome = document.createTextNode('O usuário não possui nome.');
            }
            //adiciona o conteúdo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        })
        .catch(function(error){
            txtNome = document.createTextNode('Não foi possível realizar a requisição.');
            //adiciona o conteúdo na div
            spanNome.appendChild(txtNome);
            div.appendChild(spanNome);
        });
}
/*
https://github.com/axios/axios


Performing a GET request

const axios = require('axios');

// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
NOTE: async/await is part of ECMAScript 2017 and is not supported in Internet Explorer and older browsers, so use with caution.

Performing a POST request

axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
Performing multiple concurrent requests

function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
axios API
Requests can be made by passing the relevant config to axios.

axios(config)
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
// GET request for remote image in node.js
axios({
  method: 'get',
  url: 'http://bit.ly/2mTM3nY',
  responseType: 'stream'
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
  });
axios(url[, config])
// Send a GET request (default method)
axios('/user/12345');
Request method aliases
For convenience aliases have been provided for all supported request methods.

axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])

*/























