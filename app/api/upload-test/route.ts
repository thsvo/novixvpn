export const runtime = "edge";

export async function POST(req: Request) {
  // read the whole body (discard it) so we measure true upload time
  await req.arrayBuffer();
  return new Response(JSON.stringify({ ok: true }), {
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store, no-cache, must-revalidate",
    },
  });
}
