export const runtime = "edge";
export async function GET() {
  try {
    return new Response(JSON.stringify({ ok: true, t: Date.now() }), {
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Ping error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}