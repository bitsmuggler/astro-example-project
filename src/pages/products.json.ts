import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ request }) => {
  console.log('GET request received:', request);
  return new Response(
    JSON.stringify({
      message: 'This was a GET!',
    })
  );
};

export const POST: APIRoute = ({ request }) => {
    console.log('POST request received:', request);
  return new Response(
    JSON.stringify({
      message: 'This was a POST!',
    })
  );
};