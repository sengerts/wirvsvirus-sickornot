import { goto } from '@sapper/app';

export default async function checkHealthStatus(identCode) {
    // TODO Await?
    fetch("http://api.sick-or-not.dev.schaefkn.com/result/" + identCode, {
        method: 'GET'
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            return Promise.reject('Ident Code is not valid!');
        }
    })
    .then(data => {
        // TODO Redirect to page according to result
        console.log('data is', data)
        goto('/test');
    })
    .catch(error => {
        // TODO Show sweet alert: Ident Code not valid!
        console.log('Error: ', error)
    });
}