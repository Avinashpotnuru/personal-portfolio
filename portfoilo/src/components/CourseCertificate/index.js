import React from "react";

import CertificateCard from "../CertificateCard";

import { certificateData } from "@/src/Data";

const CourseCertificate = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="grid grid-cols-1 gap-5 my-8 sm:grid-cols-2 md:grid-cols-3">
        {certificateData.map((item, idx) => (
          <CertificateCard key={idx} data={item} id={idx} />
        ))}
      </div>
    </div>
  );
};

export default CourseCertificate;
