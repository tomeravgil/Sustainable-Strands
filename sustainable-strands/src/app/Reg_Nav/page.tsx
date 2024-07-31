// pages/Reg_Nav.tsx
import React from 'react';
import PdfEditor from '../components/ui/pdfeditor';

const RegNav: React.FC = () => {
  return (
    <div>
      <h1>Edit and Save PDF</h1>
      <PdfEditor pdfUrl="../images/sample.pdf" />
    </div>
  );
};

export default RegNav;
