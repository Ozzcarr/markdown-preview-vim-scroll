// Preview script contributed to the built-in Markdown preview.
// Adds Vim-style keyboard scrolling inside the preview webview.
(function () {
  "use strict";

  var HALF_PAGE = 0.5;
  var GG_TIMEOUT_MS = 400;

  // Height of a single line, used as the step for `j` / `k`.
  function lineStep() {
    var lineHeight = parseFloat(getComputedStyle(document.body).lineHeight);
    return isFinite(lineHeight) && lineHeight > 0 ? lineHeight : 24;
  }

  // Skip navigation while a form control (e.g. the find widget) is focused.
  function isEditable(el) {
    if (!el) return false;
    if (el.isContentEditable) return true;
    var tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT";
  }

  var lastG = 0;

  // Capture phase runs before the browser's default scroll handling.
  window.addEventListener(
    "keydown",
    function (e) {
      // Only act when the preview itself is focused, never while another
      // surface (Command Palette, Quick Open, an editor) holds focus.
      if (!document.hasFocus()) return;
      if (isEditable(e.target) || e.altKey || e.metaKey) return;

      if (e.ctrlKey) {
        // Ctrl+d / Ctrl+u: half-page down / up. Other Ctrl combos are ignored
        // so the host's keybindings still receive them.
        if (e.key === "d" || e.key === "u") {
          window.scrollBy({
            top: (e.key === "d" ? 1 : -1) * window.innerHeight * HALF_PAGE,
          });
          e.preventDefault();
        }
        return;
      }

      switch (e.key) {
        case "j":
          window.scrollBy({ top: lineStep() });
          e.preventDefault();
          break;
        case "k":
          window.scrollBy({ top: -lineStep() });
          e.preventDefault();
          break;
        case "G":
          window.scrollTo({ top: document.body.scrollHeight });
          e.preventDefault();
          break;
        case "g": {
          // `gg`: two presses within the timeout jump to the top.
          var now = e.timeStamp || 0;
          if (now - lastG < GG_TIMEOUT_MS) {
            window.scrollTo({ top: 0 });
            lastG = 0;
          } else {
            lastG = now;
          }
          e.preventDefault();
          break;
        }
        case " ":
          // Suppress the default page-scroll so Space is free to act as a
          // leader key. Propagation is left intact for host keybindings.
          e.preventDefault();
          break;
      }
    },
    true,
  );
})();
