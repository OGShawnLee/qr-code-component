import QRCodeImage from "./assets/image-qr-code.png";
import { Fragment } from "react";

function Attribution() {
  return (
    <footer className="fixed bottom-0 px-8 bg-white rounded-t-2xl shadow-xl">
      <p className="text-center text-sm text-slate-dark">
        <a className="font-bold no-underline" href="https://www.frontendmentor/profile/OGShawnLee" target="_blank">
          OGShawnLee
        </a>
      </p>
    </footer>
  )
}

function QRCode() {
  return (
    <main className="max-w-xs p-4 bg-white rounded-2xl shadow-xl">
      <img className="w-full h-full rounded-xl aspect-square" src={QRCodeImage} alt="QR Code" width="300" height="300" />
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
  )
}

function App() {
  return (
    <Fragment>
      <QRCode />
      <Attribution />
    </Fragment>
  )
}

export default App
