<script>
  import qrCodeImage from './assets/image-qr-code.png';
</script>

<main>
  <div class="max-w-xs p-4 | flex flex-col gap-6 | bg-white rounded-lg shadow-lg">
    <div class="rounded-lg overflow-hidden">
      <img src={qrCodeImage} alt="qr-code" />
    </div>
    <div class="p-2 | flex flex-col gap-3 | text-center">
      <h1 class="text-2xl font-bold text-slate-700">
        Improve your front-end skills by building projects
      </h1>
      <p class="p-2">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next
        level
      </p>
    </div>
  </div>
</main>

<style>
  :global(html) {
    font-size: 15px;
  }
</style>
