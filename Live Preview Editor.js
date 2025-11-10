function updatePreview() {
  const code = document.getElementById("code").value;
  const iframe = document.getElementById("output");
  iframe.contentDocument.open();
  iframe.contentDocument.write(code);
  iframe.contentDocument.close();
}
