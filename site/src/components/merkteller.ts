let n = 0;

// Elk merk krijgt een eigen mask-id, anders pakt de tweede SVG het masker van de eerste.
export const merkId = () => `merk-huis-${++n}`;
