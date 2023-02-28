<div stl></div>
<h2>Deploy: 
 https://stpkk-image-generator.netlify.app
</h2>


<details>
<summary>

<h2>About</h2>
</summary>
<div>
 <p>An image generator application that uses OpenAI API is a software tool that generates images based on user input, utilizing OpenAI's deep learning models to learn and generate images according to specified parameters. The application may offer to save or share their generated images.</p>
 <p>This web application is built using React, utilizes Typescript and Tailwind.This app is built to be efficient and fast, with the ability to change the layout and design depending on the device used. It can be easily navigated and provide an optimal user experience. </p>
 <p>It is built with an adaptive design, which means that the layout and functionality of the app automatically adjusts to the user's device. This allows the app to look great and function well on a wide range of devices, including desktops, laptops, tablets, and smartphones.</p>

<h2>Libraries were used</h2>
<p>On client side:</p>
<p>Tailwind - a utility-first CSS framework.</p>
<p>File-saver - to saving files on the client-side.</p>
<p>React-toastify - this tool allows to add toast notifications.</p>
<p>On server side:</p>
<p>OpenAI API - allows to create images from scratch based on a text prompt.</p>
<p>Cors - for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
<p>Dotenv - loads environment variables from .env file.</p>
<p>Express - dependency injection for Express.</p>
</div>
<div>

</div>

<div >
<p>Prewie:</p>
<img src="https://github.com/stpkkk/Image-generator-OpenAI-API/blob/main/preview-image-generator.png" alt="prewie">
</div>
<div >
</details>
<details>
<summary>
<h2>How to start</h2>
</summary>

<p>Install packages</p>
<p>cd client</p>
<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>yarn install
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="yarn install" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
</div>
<div>
<p>Start project</p>
<div class="snippet-clipboard-content notranslate position-relative overflow-auto"><pre class="notranslate"><code>yarn dev 
</code></pre><div class="zeroclipboard-container position-absolute right-0 top-0">
    <clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0 tooltipped-no-delay" data-copy-feedback="Copied!" data-tooltip-direction="w" value="yarn dev" tabindex="0" role="button">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-copy js-clipboard-copy-icon m-2">
    <path fill-rule="evenodd" d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"></path><path fill-rule="evenodd" d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"></path>
</svg>
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-check js-clipboard-check-icon color-fg-success d-none m-2">
    <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
</svg>
    </clipboard-copy>
</div>
<div>

</div>
</details>
