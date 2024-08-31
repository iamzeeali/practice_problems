// Async Generators combine the functionality of generators and async/await. They allow you to produce a sequence of asynchronous results using a generator-like syntax. This is useful for scenarios where you need to handle streams of data or perform multiple asynchronous tasks in sequence.

// --------------------------------------------GET Request------------------------------------
async function* fetchData(urls) {
    for (const url of urls) {
        const response = await fetch(url);
        const data = await response.json();
        yield data;
    }
}

(async () => {
    const urls = ['https://jsonplaceholder.typicode.com/posts/1'];

    for await (const data of fetchData(urls)) {
        console.log('GET Request (Async Generators):', data);
    }
})();


// --------------------------------------------POST Request------------------------------------

async function* postData(urls, data) {
    for (const url of urls) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();
        yield result;
    }
}

(async () => {
    const urls = ['https://jsonplaceholder.typicode.com/posts'];

    for await (const result of postData(urls, { title: 'foo', body: 'bar', userId: 1 })) {
        console.log('POST Request (Async Generators):', result);
    }
})();