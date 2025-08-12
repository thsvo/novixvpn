"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DownloadVPNDialog: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">Download Our VPN</DialogTitle>
          <DialogDescription>
            Protect your privacy with our secure and fast VPN service.
            Click below to start your download.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2 justify-end">
          <Button
            onClick={() => (window.location.href = "https://play.google.com/store/apps/details?id=com.novix.mobile")}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Download Now
          </Button>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Maybe Later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DownloadVPNDialog;
