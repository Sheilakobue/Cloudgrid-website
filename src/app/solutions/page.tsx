import React from "react";
import SolutionItem from "../../components/SolutionItem"; // Ensure the path is correct
import MicrosoftModernWork from "../../../public/MicrosoftModernWork.png";
import CloudSolutions from "../../../public/CloudSolutions.png";
import Training from "../../../public/Training.png";
import Networking from "../../../public/Networking.png";
import HardwareSales from "../../../public/HardwareSales.png";
import CCTV from "../../../public/CCTV.png";

export default function SolutionList() {
  return (
    <section className="p-4 bg-white dark:bg-gray-800">
      <h1 className="text-center text-4xl font-bold mb-8 text-amber-500">
        Our Solutions
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <SolutionItem
          href="/solutions/microsoft-modern-work"
          imageSrc={MicrosoftModernWork}
          imageAlt="Microsoft Modern Work"
          title="Microsoft Modern Work"
          description="With Microsoft 365, you get all the familiar productivity apps your employees use every day."
        />
        <SolutionItem
          href="/solutions/cloud-solutions"
          imageSrc={CloudSolutions}
          imageAlt="Cloud Solutions"
          title="Cloud Solutions"
          description="We provide a cloud-based data solution in which data is stored and processed on remote servers, rather than on on-site servers."
        />
        <SolutionItem
          href="/solutions/microsoft-end-user-training"
          imageSrc={Training}
          imageAlt="Microsoft End-User Training"
          title="Microsoft End-User Training"
          description="We provide end-user training for Microsoft products to ensure your team can use them effectively."
        />
        <SolutionItem
          href="/solutions/networking"
          imageSrc={Networking}
          imageAlt="Networking"
          title="Networking"
          description="Servers, firewalls, hubs, switches, routers, and cabling."
        />
        <SolutionItem
          href="/solutions/hardware-sales"
          imageSrc={HardwareSales}
          imageAlt="Hardware Sales"
          title="Hardware Sales"
          description="Computers: desktops, notebooks, tablets. Printers: peripherals and consumables."
        />
        <SolutionItem
          href="/solutions/cctv"
          imageSrc={CCTV}
          imageAlt="CCTV"
          title="CCTV"
          description="Camera sales, cabling, remote access, and maintenance."
        />
      </div>
    </section>
  );
}
