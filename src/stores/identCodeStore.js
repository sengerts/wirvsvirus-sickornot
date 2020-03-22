import { writable } from 'svelte/store';

export const identCode = writable("");
export const identCodeNotValid = writable(false);