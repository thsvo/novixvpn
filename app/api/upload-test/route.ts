export const runtime = "edge";
export async function POST(req: Request) {
  try {
    await req.arrayBuffer();
    return new Response(JSON.stringify({ ok: true }), {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Upload test error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}