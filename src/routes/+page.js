import { PUBLIC_URL } from '$env/static/public'
 

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const req = await fetch(`${PUBLIC_URL}/items/articles`)
    const {data} = await req.json();
    return { articles : data, PUBLIC_URL };
}