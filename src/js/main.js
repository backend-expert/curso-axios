const statusEl = document.getElementById('status');
const dataEl = document.getElementById('data');
const headersEl = document.getElementById('headers');
const configEl = document.getElementById('config');

const get = () => {
    // axios({
    //     methods:'get',
    //         url: 'https://jsonplaceholder.typicode.com/posts'             
        
    // })

    // axios.get("https://jsonplaceholder.typicode.com/posts", {
    //     params: {
    //         _limit: 6
            
    //     }
    // })
    //     .then((response) => {
    //         renderOutput(response);
    //         // console.log(response);
    //     });

    // axios.get('https://jsonplaceholder.typicode.com/posts', {
    //     params: {
    //         _limit: 5
    //     }
    // })
    //     .then((response) => {
    //         renderOutput(response)
    //     })

    // meus testes
    axios.get("https://jsonplaceholder.typicode.com/posts").then(function (response) {
        console.log("data",response.data);
        console.log("data id ",response.data.id);
        console.log("respponse === status",response.status);
        console.log("respponse === statusText",response.statusText);
        console.log("respponse === headers",response.headers);
        console.log("respponse === config",response.config);
      });
    console.log('get');
}

const post = () => {
    console.log('post');
}

const put = () => {
    console.log('put');
}

const patch = () => {
    console.log('patch');
}

const del = () => {
    console.log('delete');
}

const multiple = () => {
    console.log('multiple');
}

const transform = () => {
    console.log('transform');
}

const errorHandling = () => {
    console.log('errorHandling');
}

const cancel = () => {
    console.log('cancel');
}

const clear = () => {
    statusEl.innerHTML = '';
    statusEl.className = '';
    dataEl.innerHTML = '';
    headersEl.innerHTML = '';
    configEl.innerHTML = '';
}

const renderOutput = (response) => {
    // Status
    const status = response.status;

    statusEl.removeAttribute('class');

    let statusElClass = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium';

    if (status >= 500) {
        statusElClass += ' bg-red-100 text-red-800';
    } else if (status >= 400) {
        statusElClass += ' bg-yellow-100 text-yellow-800';
    } else if (status >= 200) {
        statusElClass += ' bg-green-100 text-green-800';
    }

    statusEl.innerHTML = status;
    statusEl.className = statusElClass;

    // Data
    dataEl.innerHTML = JSON.stringify(response.data, null, 2);
    Prism.highlightElement(dataEl);

    // Headers
    headersEl.innerHTML = JSON.stringify(response.headers, null, 2);
    Prism.highlightElement(headersEl);

    // Config
    configEl.innerHTML = JSON.stringify(response.config, null, 2);
    Prism.highlightElement(configEl);
}

document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('put').addEventListener('click', put);
document.getElementById('patch').addEventListener('click', patch);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('multiple').addEventListener('click', multiple);
document.getElementById('transform').addEventListener('click', transform);
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('clear').addEventListener('click', clear);
