export function GET(req) {
  console.log(req);
  return new Response('Hello World');
}
