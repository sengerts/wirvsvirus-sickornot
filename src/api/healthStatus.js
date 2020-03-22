import { goto } from '@sapper/app';
import { identCodeNotValid } from '../stores/identCodeStore.js';

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
        identCodeNotValid.update(oldValue => false);
        if(!data.testResult) {
            return;
        }
        if(data.testResult === "UNTESTED") {
            goto('/unknown');
        } else if(data.testResult === "POSITIVE") {
            goto('/sick');
        } else if(data.testResult === "NEGATIVE") {
            goto('/healthy');
        } else {
            return Promise.reject('Test result not valid!');
        }
    })
    .catch(error => {
        identCodeNotValid.update(oldValue => true);
    });
}