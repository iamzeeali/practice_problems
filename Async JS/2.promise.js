// // Promises were introduced to address issues with callback hell. 
// A Promise represents a value that might be available now, in the future, or never. 
// They provide a cleaner way to manage asynchronous operations by chaining .then() and .catch() methods.

// --------------------------------------------GET Request------------------------------------
function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('GET Request (Promise):', data);
        })
        .catch(error => console.error('Error:', error));
}

getData('https://jsonplaceholder.typicode.com/posts/1');



// --------------------------------------------POST Request------------------------------------
function postData(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log('POST Request (Promise):', data);
        })
        .catch(error => console.error('Error:', error));
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 });