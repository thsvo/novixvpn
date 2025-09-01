"use client";

import { useMemo, useState } from "react";

type Result = {
  download: number | null; // Mbps
  upload: number | null;   // Mbps
  ping: number | null;     // ms
  jitter: number | null;   // ms
  isp: string;
  server: string;
  quality: string;
};

const DOWNLOAD_FILE = "https://speed.hetzner.de/25MB.bin"; // reliable test file

export default function SpeedTestPage() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result>({
    download: null,
    upload: null,
    ping: null,
    jitter: null,
    isp: "Unknown",
    server: "Nearest (your hosting)",
    quality: "—",
  });

  const quality = useMemo(() => {
    const d = result.download ?? 0;
    const u = result.upload ?? 0;
    const p = result.ping ?? 9999;

    if (!result.download && !result.upload && !result.ping) return "Testing...";
    if (d < 10 || u < 3 || p > 150) return "Poor";
    if (d < 25 || u < 5 || p > 80) return "Fair";
    if (d < 100 || u < 20 || p > 40) return "Good";
    return "Excellent";
  }, [result.download, result.upload, result.ping]);

  async function measurePing(iterations = 8): Promise<{ avg: number; jitter: number }> {
    // do multiple pings to your edge function
    const samples: number[] = [];
    for (let i = 0; i < iterations; i++) {
      const t0 = performance.now();
      await fetch(`/api/ping?i=${i}`, { cache: "no-store" });
      const t1 = performance.now();
      samples.push(t1 - t0);
      // tiny spacing to avoid batching by the browser
      await new Promise((r) => setTimeout(r, 120));
    }
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const mean = avg;
    const variance = samples.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / samples.length;
    const jitter = Math.sqrt(variance); // std dev as a simple jitter metric
    return { avg, jitter };
  }

  async function measureDownload(): Promise<number> {
    const url = `${DOWNLOAD_FILE}?nocache=${Math.random()}`;
    const t0 = performance.now();
    const resp = await fetch(url, { cache: "no-store" });
    const blob = await resp.blob(); // wait for full download
    const t1 = performance.now();
    const seconds = (t1 - t0) / 1000;
    const bits = blob.size * 8;
    const mbps = bits / seconds / (1024 * 1024);
    return mbps;
  }

  async function measureUpload(sizeMB = 5): Promise<number> {
    // create random payload (don’t compress easily)
    const sizeBytes = sizeMB * 1024 * 1024;
    const chunk = crypto.getRandomValues(new Uint8Array(sizeBytes));
    const t0 = performance.now();
    await fetch("/api/upload-test", {
      method: "POST",
      body: new Blob([chunk], { type: "application/octet-stream" }),
      headers: { "x-upload-bytes": String(sizeBytes) },
    });
    const t1 = performance.now();
    const seconds = (t1 - t0) / 1000;
    const bits = sizeBytes * 8;
    const mbps = bits / seconds / (1024 * 1024);
    return mbps;
  }

  async function getIspInfo(): Promise<{ isp: string; server: string }> {
    // Best-effort ISP + location (no key). May rate-limit sometimes.
    try {
      const r = await fetch("https://ipapi.co/json/", { cache: "no-store" });
      const j = await r.json();
      const isp = j.org || "Unknown";
      const server = `${j.city || "Unknown"}, ${j.country_name || ""}`.trim();
      return { isp, server };
    } catch {
      return { isp: "Unknown", server: "Unknown" };
    }
  }

  const runTest = async () => {
    setStarted(true);
    setLoading(true);
    setResult((r) => ({ ...r, download: null, upload: null, ping: null, jitter: null, quality: "Testing..." }));

    // Run parts sequentially for simplicity (parallel works too)
    const [{ avg, jitter }, download, upload, ispData] = await Promise.all([
      measurePing(),
      measureDownload(),
      measureUpload(5), // adjust MB to tune duration
      getIspInfo(),
    ]);

    const newResult: Result = {
      download: Number(download.toFixed(2)),
      upload: Number(upload.toFixed(2)),
      ping: Number(avg.toFixed(0)),
      jitter: Number(jitter.toFixed(1)),
      isp: ispData.isp,
      server: ispData.server,
      quality: "", // filled by useMemo
    };

    setResult(newResult);
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      {!started ? (
        <button
          onClick={runTest}
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-blue-700"
        >
          Start Speed Test
        </button>
      ) : (
        <div className="bg-white shadow-xl rounded-2xl w-full max-w-2xl p-6">
          <h2 className="text-lg font-semibold mb-2">⚡ Internet Speed Test</h2>
          <p className="text-sm text-gray-600 mb-6">
            Test your internet connection speed to see how fast you can download and upload data, plus ping and jitter.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 tracking-wider text-xs">DOWNLOAD</p>
              <p className="text-3xl font-bold text-blue-600">
                {result.download !== null ? `${result.download} Mbps` : (loading ? "—" : "--")}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 tracking-wider text-xs">UPLOAD</p>
              <p className="text-3xl font-bold text-green-600">
                {result.upload !== null ? `${result.upload} Mbps` : (loading ? "—" : "--")}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 tracking-wider text-xs">PING</p>
              <p className="text-3xl font-bold text-purple-600">
                {result.ping !== null ? `${result.ping} ms` : (loading ? "—" : "--")}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl mb-6 grid grid-cols-2 gap-2 text-sm">
            <p><span className="font-semibold">ISP:</span> {result.isp}</p>
            <p><span className="font-semibold">Server:</span> {result.server}</p>
            <p><span className="font-semibold">Latency:</span> {result.ping !== null ? `${result.ping} ms` : "--"}</p>
            <p><span className="font-semibold">Jitter:</span> {result.jitter !== null ? `${result.jitter} ms` : "--"}</p>
            <p className="col-span-2"><span className="font-semibold">Quality:</span> {quality}</p>
          </div>

          <button
            onClick={runTest}
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Testing..." : "Test Again"}
          </button>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Tip: For accurate results, close other apps and downloads.
          </p>
        </div>
      )}
    </div>
  );
}
