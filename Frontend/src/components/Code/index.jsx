import { QRCodeSVG } from "qrcode.react";

const Code = ({ url }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 text-[#181411] text-center col-start-2 row-start-1 md:col-start-2 md:row-start-2">
      <h3 className="font-sans text-lg font-semibold ">Comparte Rapidamente</h3>
      <QRCodeSVG value={url} />
      <span>Escanea el código QR para compartir este producto</span>
    </div>
  );
};

export default Code;
