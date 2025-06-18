
import { useState } from "react";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import ProxyInput from "@/components/ProxyInput";
import GamesGrid from "@/components/GamesGrid";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

const Index = () => {
  const [activeTab, setActiveTab] = useState('proxy');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex flex-col relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow flex flex-col items-center justify-start px-4">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          
          <div className="w-full flex-grow flex items-start justify-center">
            {activeTab === 'proxy' ? (
              <div className="w-full flex items-center justify-center min-h-[400px]">
                <ProxyInput />
              </div>
            ) : (
              <GamesGrid />
            )}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
