import { useToast } from "@/providers/toast";

import { useToggle } from "./useToogle";

export function useDownloadCV() {
  const { toast } = useToast();

  const { enabled: downloading, onSwitch: setDownloading } = useToggle();

  const onDownloadCV = async () => {
    try {
      setDownloading(true);

      const res = await fetch("/api/download-cv", {
        method: "GET",
        cache: "no-store",
      });

      if (!res.ok) {
        const json = await res.json();
        toast({
          title: "Failed to download CV",
          description: json.error,
          type: "error",
        });

        setDownloading(false);
        return;
      }

      const buffer = await res.arrayBuffer();
      const blob = new Blob([buffer], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download =
        process.env.NEXT_PUBLIC_FILE_NAME ||
        "Le_The_Phuc _Software_Engineer.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      const handleWindowFocus = () => {
        setTimeout(() => {
          toast({
            title: "Successfully",
            description: "You have downloaded CV successfully",
            type: "success",
          });
          setDownloading(false);
          window.removeEventListener("focus", handleWindowFocus);
        }, 300);
      };

      window.addEventListener("focus", handleWindowFocus);
    } catch (error) {
      toast({
        title: "Failed to download CV",
        description: String(error),
        type: "error",
      });
    } finally {
      setDownloading(false);
    }
  };

  return { pending: downloading, onDownloadCV };
}
