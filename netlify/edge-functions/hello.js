//export default () => new Response("Hello");


// Let's serve an image of a kitten from the internet

export default async () => {
  // fetch() is supported natively by Deno!
  // Returning the awaited response automatically sets the
  // content-type headers!


  const r = await fetch("https://api.vercel.com/v4/aliases/example.vercel.app?from=1540095775951&projectId=prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB&since=1540095775941&teamId=SOME_STRING_VALUE&until=1540095775951", {
    "headers": {
      "Authorization": "Bearer <TOKEN>"
    },
    "method": "get"
  })
    return Response.json(await r.json());


};

export const config = { path: "/test" };