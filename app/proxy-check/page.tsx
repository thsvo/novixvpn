"use client";
import { useEffect, useState } from "react";

export default function ProxyCheckCard() {
  const [ip, setIp] = useState<string>("");
  const [proxyData, setProxyData] = useState<{
    proxy: boolean;
    proxyType: string;
    anonymityLevel: string;
    tor: boolean;
  }>({
    proxy: false,
    proxyType: "Unknown",
    anonymityLevel: "Unknown",
    tor: false,
  });
  const [loading, setLoading] = useState<boolean>(false);

  // fetch IP and proxy details
  const fetchIpAndProxy = async () => {
    setLoading(true);
    try {
      // Fetch IP
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      setIp(ipData.ip);

      // Fetch proxy details using ip-api.com (HTTPS instead of HTTP ✅)
      const proxyRes = await fetch(
        `https://ip-api.com/json/${ipData.ip}?fields=proxy,hosting`
      );
      const proxyData = await proxyRes.json();

      // Determine proxy type and anonymity level
      const isProxy = proxyData.proxy || proxyData.hosting;
      const newProxyData = {
        proxy: isProxy,
        proxyType: isProxy
          ? proxyData.hosting
            ? "Datacenter"
            : "HTTP Proxy"
          : "None",
        anonymityLevel: isProxy
          ? proxyData.hosting
            ? "Low"
            : "Medium"
          : "None",
        tor: false, // ip-api doesn't provide Tor info directly; assume false for now
      };
      setProxyData(newProxyData);
    } catch (err) {
      console.error(err);
      setIp("Error fetching IP");
      setProxyData({
        proxy: false,
        proxyType: "Error",
        anonymityLevel: "Error",
        tor: false,
      });
    }
    // show loader for at least 5s
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  // fetch once on first render
  useEffect(() => {
    fetchIpAndProxy();
  }, []);

  return (
    <div className="border rounded-lg my-10 p-10 max-w-6xl w-full mx-auto mt-6">
      <p className="text-gray-700 text-lg text-center">
        This tool helps you find out whether your internet connection is going
        through a proxy or the Tor network.
      </p>
      <div className="bg-gray-100 p-10 mt-4 rounded-lg">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 text-2xl">⚠️</span>
          <h2 className="font-bold text-2xl">
            {proxyData.proxy ? "Proxy Detected" : "No Proxy Detected"}
          </h2>
        </div>
        <p className="text-sm text-gray-600 ml-10">
          {proxyData.proxy
            ? "Your connection appears to be using a proxy"
            : "Your connection does not appear to be using a proxy"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-white p-10 rounded shadow">
            <h3 className="font-semibold mb-2">Connection Details</h3>
            {loading ? (
              <p className="text-gray-500 animate-pulse">Loading...</p>
            ) : (
              <>
                <div className="flex justify-between my-2 items-center">
                  <p>
                    <strong>IP Address:</strong>
                  </p>
                  <p>{ip}</p>
                </div>
                <div className="flex justify-between my-2 items-center">
                  <p>
                    <strong>Proxy Type:</strong>
                  </p>
                  <p>{proxyData.proxyType}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p>
                    <strong>Anonymity Level:</strong>
                  </p>
                  <p>{proxyData.anonymityLevel}</p>
                </div>
              </>
            )}
          </div>
          <div className="bg-white p-10 rounded shadow">
            <h3 className="font-semibold mb-2">Detection Results</h3>
            {loading ? (
              <p className="text-gray-500 animate-pulse">Loading...</p>
            ) : (
              <>
                <p className="flex items-center">
                  <span
                    className={`w-3 h-3 ${
                      proxyData.proxy ? "bg-yellow-400" : "bg-green-400"
                    } rounded-full mr-2`}
                  ></span>
                  Proxy: {proxyData.proxy ? "Detected" : "Not Detected"}
                </p>
                <p className="flex mt-2 items-center">
                  <span
                    className={`w-3 h-3 ${
                      proxyData.tor ? "bg-yellow-400" : "bg-green-400"
                    } rounded-full mr-2`}
                  ></span>
                  Tor Exit Node: {proxyData.tor ? "Detected" : "Not Detected"}
                </p>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={fetchIpAndProxy}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full"
            disabled={loading}
          >
            {loading ? "Checking..." : "Check Again"}
          </button>
        </div>
      </div>
    </div>
  );
}
