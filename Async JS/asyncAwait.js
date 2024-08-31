// Async/Await is syntactic sugar built on top of Promises that allows us to write asynchronous code in a synchronous manner. It makes the code easier to read and write by eliminating the need for .then() chains.

// --------------------------------------------GET Request------------------------------------
async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('GET Request (Async/Await):', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

getData('https://jsonplaceholder.typicode.com/posts/1');


// --------------------------------------------POST Request------------------------------------
async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        console.log('POST Request (Async/Await):', result);
    } catch (error) {
        console.error('Error:', error);
    }
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 });