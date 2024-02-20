import Intermedio from "@/Components/Intermedio";
import dynamic from "next/dynamic";

const DownloaderPDF = dynamic(() => import("../Components/Downloader/index"), {
  ssr: false,
});

export default function Home() {
  return (
      <DownloaderPDF />
  );
}
