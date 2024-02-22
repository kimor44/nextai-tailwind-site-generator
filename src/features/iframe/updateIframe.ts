const iframe = document.querySelector("#iframe-generated") as HTMLIFrameElement;

export const updateIframe = (code: string) => {
  iframe.srcdoc = `
  <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Generated code with AI</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body id="body-generated" class="body-generated">
        ${code}
      </body>
    </html>`;
};
