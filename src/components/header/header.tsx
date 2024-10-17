import { UseWebPage } from "../../hooks/useWebPage/use-web-page";
import { QRCodeSVG } from "qrcode.react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useRef } from "react";

export const Header = () => {
  const { user } = UseWebPage();
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const generatePDF = async () => {
    if (qrCodeRef.current) {
      const canvas = await html2canvas(qrCodeRef.current, { scale: 4 }); // Aumenta a escala para melhorar a nitidez
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();

      // Tamanho da página A4 em mm
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Tamanho do QR code em mm
      const qrCodeSize = 50;

      // Coordenadas para centralizar o QR code
      const x = (pageWidth - qrCodeSize) / 2;
      const y = (pageHeight - qrCodeSize) / 2;

      pdf.addImage(imgData, "PNG", x, y, qrCodeSize, qrCodeSize);
      pdf.save("qrcode.pdf");
    }
  };

  return (
    <header className="w-full px-10 h-20 bg-gray-800 flex justify-between items-center">
      <div />

      <div>
        <p className="text-xs md:text-base text-center md:pl-10">Diário de</p>
        <h1 className="text-white text-sm md:text-2xl">
          {user.nameofcouple} ❤
        </h1>
      </div>

      <div
        className="p-2 bg-white cursor-pointer"
        onClick={generatePDF}
        ref={qrCodeRef}
      >
        <QRCodeSVG
          value={`http://localhost:3000/webPage/${user.userId}`}
          size={50}
        />
      </div>
    </header>
  );
};
