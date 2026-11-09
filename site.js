// Where the download button goes. Null means the page says the app is coming instead.
// TestFlight's public link while testing, the App Store link after launch.
const APP_URL = "https://testflight.apple.com/join/UeY7SZ4Y";

function showDownload() {
  for (const el of document.querySelectorAll("[data-download]")) {
    if (APP_URL) {
      el.innerHTML = '<a class="button" href="' + APP_URL + '">Last ned Knips</a>';
    } else {
      el.innerHTML = '<div class="soon">Knips kommer snart til iPhone.</div>';
    }
  }
}
