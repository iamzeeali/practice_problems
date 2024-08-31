// Observables are a part of the Reactive Extensions for JavaScript (RxJS) and provide a powerful way to handle asynchronous data streams. They are used extensively in Angular and other frameworks. Observables can be thought of as sequences of data over time, and they offer operators to filter, transform, and aggregate data streams.

// --------------------------------------------GET Request------------------------------------
import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const fetchData = url => {
    return from(fetch(url).then(response => response.json())).pipe(
        map(data => console.log('GET Request (Observable):', data)),
        catchError(error => {
            console.error('Error:', error);
            throw error;
        })
    );
};

fetchData('https://jsonplaceholder.typicode.com/posts/1').subscribe();


// --------------------------------------------POST Request------------------------------------
import { from } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const postData = (url, data) => {
    return from(
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }).then(response => response.json())
    ).pipe(
        map(result => console.log('POST Request (Observable):', result)),
        catchError(error => {
            console.error('Error:', error);
            throw error;
        })
    );
};

postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }).subscribe();