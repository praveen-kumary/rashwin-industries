// @ts-nocheck
import server from "../dist/server/server.js";

export default async function handler(request: Request) {
  try {
    return await server.fetch(request, {}, {});
  } catch (error) {
    console.error("Error in SSR edge function:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
