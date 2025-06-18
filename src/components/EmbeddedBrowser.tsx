
import { useState } from "react";
import ProxyTaskbar from "./ProxyTaskbar";

interface EmbeddedBrowserProps {
  url: string;
  title: string;
  theme: string;
  onClose: () => void;
}

const EmbeddedBrowser = ({ url, title, theme, onClose }: EmbeddedBrowserProps) => {
  return (
    <div className="fixed inset-0 z-50 bg-black">
      <ProxyTaskbar theme={theme} onClose={onClose} />
      <div className="pt-16 h-full">
        <iframe
          src={url}
          className="w-full h-full border-0"
          title={title}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-navigation"
        />
      </div>
    </div>
  );
};

export default EmbeddedBrowser;
