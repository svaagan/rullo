// Where the download button goes. Null means the page says the app is coming instead.
// TestFlight's public link while testing, the App Store link after launch.
const APP_URL = "https://testflight.apple.com/join/UeY7SZ4Y";

// Button texts per page language (the <html lang> attribute decides).
const TEXTS = {
  nb: { download: "Last ned Knips", soon: "Knips kommer snart til iPhone." },
  en: { download: "Get Knips", soon: "Knips is coming soon to iPhone." },
};

function showDownload() {
  const t = TEXTS[document.documentElement.lang] || TEXTS.nb;
  for (const el of document.querySelectorAll("[data-download]")) {
    if (APP_URL) {
      el.innerHTML = '<a class="button" href="' + APP_URL + '">' + t.download + '</a>';
    } else {
      el.innerHTML = '<div class="soon">' + t.soon + '</div>';
    }
  }
}
