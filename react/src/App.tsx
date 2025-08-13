import QRCodeImage from "./assets/image-qr-code.png";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <main className="max-w-xs p-4 bg-white rounded-2xl shadow-xl">
        <img className="w-full h-full rounded-xl aspect-square" src={QRCodeImage} alt="QR Code" />
        <div className="px-3 text-center">
          <h1 className="text-2xl font-bold text-slate-dark">
            Improve your front-end skills by building projects
          </h1>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next
            level.
          </p>
        </div>
      </main>
      <footer className="fixed bottom-0 max-w-xs">
        <p className="text-center text-sm text-slate-dark">
          <a className="font-bold" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
            Frontend Mentor
          </a>
          {" "}
          -
          {" "}
          <a className="font-bold" href="https://www.frontendmentor/profile/OGShawnLee" target="_blank">
            OGShawnLee
          </a>
        </p>
      </footer>
    </Fragment>
  )
}

export default App
