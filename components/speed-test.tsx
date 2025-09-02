"use client";
import { useMemo, useState } from "react";

type Result = {
  download: number | null;
  upload: number | null;
  ping: number | null;
  jitter: number | null;
  isp: string;
  server: string;
  quality: string;
  error?: string;
};

const DOWNLOAD_FILE = "https://speed.cloudflare.com/__down?bytes=10000000"; // 10MB file

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
    error: "",
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

  async function measurePing(
    iterations = 8
  ): Promise<{ avg: number; jitter: number }> {
    const samples: number[] = [];
    for (let i = 0; i < iterations; i++) {
      try {
        const t0 = performance.now();
        const res = await fetch(`/api/ping?i=${i}`, { cache: "no-store" });
        if (!res.ok) throw new Error("Ping request failed");
        const t1 = performance.now();
        samples.push(t1 - t0);
        await new Promise((r) => setTimeout(r, 200));
      } catch (error) {
        console.error(`Ping iteration ${i} failed:`, error);
      }
    }
    if (samples.length === 0) throw new Error("No successful ping samples");
    const avg = samples.reduce((a, b) => a + b, 0) / samples.length;
    const mean = avg;
    const variance =
      samples.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / samples.length;
    const jitter = Math.sqrt(variance);
    return { avg, jitter };
  }

  async function measureDownload(): Promise<number> {
    const url = `${DOWNLOAD_FILE}?nocache=${Math.random()}`;
    try {
      const t0 = performance.now();
      const resp = await fetch(url, { cache: "no-store" });
      if (!resp.ok)
        throw new Error(`Download request failed: ${resp.statusText}`);
      const blob = await resp.blob();
      const t1 = performance.now();
      const seconds = (t1 - t0) / 1000;
      const bits = blob.size * 8;
      const mbps = bits / seconds / (1024 * 1024);
      return mbps;
    } catch (error) {
      console.error("Download test failed:", error);
      throw error;
    }
  }

  async function measureUpload(sizeMB = 2): Promise<number> {
    const sizeBytes = sizeMB * 1024 * 1024;
    const chunk = crypto.getRandomValues(new Uint8Array(sizeBytes));
    try {
      const t0 = performance.now();
      const res = await fetch("/api/upload-test", {
        method: "POST",
        body: new Blob([chunk], { type: "application/octet-stream" }),
        headers: { "x-upload-bytes": String(sizeBytes) },
      });
      if (!res.ok) throw new Error("Upload request failed");
      const t1 = performance.now();
      const seconds = (t1 - t0) / 1000;
      const bits = sizeBytes * 8;
      const mbps = bits / seconds / (1024 * 1024);
      return mbps;
    } catch (error) {
      console.error("Upload test failed:", error);
      throw error;
    }
  }

  async function getIspInfo(): Promise<{ isp: string; server: string }> {
    try {
      const r = await fetch("http://ip-api.com/json/", { cache: "no-store" });
      if (!r.ok) throw new Error("ISP API request failed");
      const j = await r.json();
      const isp = j.isp || j.org || "Unknown";
      const server = `${j.city || "Unknown"}, ${j.country || ""}`.trim();
      return { isp, server };
    } catch {
      return { isp: "Unknown", server: "Unknown" };
    }
  }

  const runTest = async () => {
    console.log("Starting test...");
    setStarted(true);
    setLoading(true);
    setResult((r) => ({
      ...r,
      download: null,
      upload: null,
      ping: null,
      jitter: null,
      quality: "Testing...",
      error: "",
    }));
    let newResult: Result = {
      download: null,
      upload: null,
      ping: null,
      jitter: null,
      isp: "Unknown",
      server: "Unknown",
      quality: "",
      error: "",
    };
    try {
      const pingResult = await measurePing();
      console.log("Ping:", pingResult);
      newResult.ping = Number(pingResult.avg.toFixed(0));
      newResult.jitter = Number(pingResult.jitter.toFixed(1));
    } catch (error) {
      console.error("Ping test failed:", error);
      newResult.error = "Ping test failed. Please try again.";
    }
    try {
      const download = await measureDownload();
      console.log("Download:", download);
      newResult.download = Number(download.toFixed(2));
    } catch (error) {
      console.error("Download test failed:", error);
      newResult.error =
        "Download test failed due to server issue. Please try again.";
    }
    try {
      const upload = await measureUpload();
      console.log("Upload:", upload);
      newResult.upload = Number(upload.toFixed(2));
    } catch (error) {
      console.error("Upload test failed:", error);
      newResult.error = "Upload test failed. Please try again.";
    }
    try {
      const ispData = await getIspInfo();
      console.log("ISP:", ispData);
      newResult.isp = ispData.isp;
      newResult.server = ispData.server;
    } catch (error) {
      console.error("ISP test failed:", error);
      newResult.error = "Failed to fetch ISP information.";
    }
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
            Test your internet connection speed to see how fast you can download
            and upload data, plus ping and jitter.
          </p>
          {result.error && (
            <p className="text-red-600 text-sm mb-4">{result.error}</p>
          )}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 tracking-wider text-xs">DOWNLOAD</p>
              <p className="text-3xl font-bold text-blue-600">
                {result.download !== null
                  ? `${result.download} Mbps`
                  : loading
                  ? "—"
                  : "--"}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 tracking-wider text-xs">UPLOAD</p>
              <p className="text-3xl font-bold text-green-600">
                {result.upload !== null
                  ? `${result.upload} Mbps`
                  : loading
                  ? "—"
                  : "--"}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl text-center">
              <p className="text-gray-500 tracking-wider text-xs">PING</p>
              <p className="text-3xl font-bold text-purple-600">
                {result.ping !== null
                  ? `${result.ping} ms`
                  : loading
                  ? "—"
                  : "--"}
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl mb-6 grid grid-cols-2 gap-2 text-sm">
            <p>
              <span className="font-semibold">ISP:</span> {result.isp}
            </p>
            <p>
              <span className="font-semibold">Server:</span> {result.server}
            </p>
            <p>
              <span className="font-semibold">Latency:</span>{" "}
              {result.ping !== null ? `${result.ping} ms` : "--"}
            </p>
            <p>
              <span className="font-semibold">Jitter:</span>{" "}
              {result.jitter !== null ? `${result.jitter} ms` : "--"}
            </p>
            <p className="col-span-2">
              <span className="font-semibold">Quality:</span> {quality}
            </p>
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
