export const runtime = "edge"; // lower latency

export async function GET() {
  // return a tiny JSON and disable caching
  return new Response(JSON.stringify({ ok: true, t: Date.now() }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store, no-cache, must-revalidate",
    },
  });
}
