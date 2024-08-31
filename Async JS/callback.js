// Callbacks are one of the earliest ways to handle asynchronous operations in JavaScript. A function is passed as an argument to another function and gets executed once the operation completes. However, this can lead to “callback hell” where callbacks are nested within callbacks, making the code hard to manage.

// --------------------------------------------GET Request------------------------------------
function getData(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(null, JSON.parse(xhr.responseText));
        } else if (xhr.readyState === 4) {
            callback('Error occurred');
        }
    };

    xhr.send();
}

getData('https://jsonplaceholder.typicode.com/posts/1', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('GET Request (Callback):', data);
    }
});


// --------------------------------------------POST Request------------------------------------
function postData(url, data, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 201) {
            callback(null, JSON.parse(xhr.responseText));
        } else if (xhr.readyState === 4) {
            callback('Error occurred');
        }
    };

    xhr.send(JSON.stringify(data));
}

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }, function (err, data) {
    if (err) {
        console.error(err);
    } else {
        console.log('POST Request (Callback):', data);
    }
});