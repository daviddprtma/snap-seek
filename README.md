
<br/>
<div align="center">

<h3 align="center">SnapSeek</h3>
<p align="center">
A versatile visual search assistant bot to integrate text, image, and voice interactions.
<br/>
<br/>
<a href="https://snap-seek-nine.vercel.app/">View Demo Project</a>  


</p>
</div>

## About The Project

![Product Screenshot](https://github.com/daviddprtma/snap-seek/blob/0253e00e8c1f37fc05b07eaa291db88da1cc2d26/public/snapseek.png)

SnapSeek is an application visual search assistant to deploy your private Gemini application for free with one click, supporting Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini Pro, and Gemini Pro Vision models.

It includes a straightforward interface supporting image recognition and voice conversations. And also a cross-platform application client with a persistent menu bar for enhanced stackie productivity🙌.

## Features
- **One-Click Free Deployment** on Vercel in under 1 minute.
- Lightweight (~4MB) cross-platform client (Windows/MacOS/Linux) that can reside in the menu bar for improved office efficiency.
- Supports multimodal models capable of understanding images, videos, audios, and some text documents.
- Talk mode: Directly converse with Gemini.
- Visual recognition allows Gemini to interpret picture content.
- Assistant market featuring hundreds of curated system commands.
- Full Markdown support: LaTeX formulas, code highlighting, and more.
- Automatic compression of contextual chat records for extended conversations while conserving tokens.
- Privacy and security ensured with all data stored locally in the user's browser.
- Progressive Web App (PWA) support for standalone application functionality.
- Well-designed UI with responsive design and dark mode support.
- Extremely fast initial screen load time with support for streaming responses.
- Static deployment allows deployment on any service supporting static pages like GitHub Pages, Cloudflare, Vercel, etc.
- Multilingual support: English, Hindi, Bengali, Simplified Chinese, Traditional Chinese, Japanese, Korean, Spanish, German, French, Portuguese, Russian, and Arabic.

### Built With

- [NextJS](https://nextjs.org)
- [Gemini](https://ai.google.dev/aistudio?gad_source=1&gclid=CjwKCAiAxKy5BhBbEiwAYiW--5RtHvRG8IYT-h7RR9IdrongRp3Fx2n87oY11c-M5_ZkSSEXDoQCChoCovcQAvD_BwE)
- [NodeJs](https://nodejs.org/en)
- [Docker](https://www.docker.com/)
- [Rust](https://www.rust-lang.org/)
- [Vercel](https://vercel.com/)
## Getting Started

Before you can use this project, follow all the steps in below⬇️
### Prerequisites

Make sure that you have installed Nodejs>=18 and Docker >=20
### Installation

1. Get API Key for Gemini at [Google AI Studio](https://ai.google.dev/aistudio?gad_source=1&gclid=CjwKCAiAxKy5BhBbEiwAYiW--5RtHvRG8IYT-h7RR9IdrongRp3Fx2n87oY11c-M5_ZkSSEXDoQCChoCovcQAvD_BwE)
2. Clone the repo
   ```sh
   https://github.com/daviddprtma/snap-seek.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy .env.example environment variable in there and make a new .env file to paste the environment variable.

5. Copy & paste your gemini api key to use the project 
   ```sh
   GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
   ```

6. Copy & paste this gemini api base url 
   ```sh
   GEMINI_API_BASE_URL=https://api.gemini.com/v1
   ```

7. Copy & paste this gemini upload base url
```sh
   GEMINI_UPLOAD_BASE_URL=https://upload.gemini.com/v1
   ```

8. Copy & paste this next public gemini model list (The default model list is represented by all, and multiple models are separated by ,. For adding a new model, either directly specify the model name all,new-model-name, or use the + symbol followed by the model name, e.g., all,+new-model-name. To remove a model from the list, use the - symbol followed by the model name, e.g., all,-existing-model-name. Use -all to remove the default model list. To set a default model, use the @ symbol followed by the model name, e.g., all,@default-model-name.)

```sh
   NEXT_PUBLIC_GEMINI_MODEL_LIST=all
   ```

9. Run the project in the terminal and it should be appear in http://localhost:3000

```sh
   npm run dev
   ```

10. After successfully run the project, open in Setting->LLM Model->Copy & paste your Gemini API key in the box provided and click Save.
11. Happy surfing to SnapSeek!🙌🎉

## Roadmap

- [x]  Topic square reconstruction and introduction of Prompt list.
- [x] Use Tauri to package desktop applications.
- [X]  Support conversation list.
- [X] Multi-language Support
  - [X] English
  - [X] Hindi
  - [X] Bengali
  - [X] Simplified Chinese
  - [X] Traditional Chinese
  - [X] Japanese
  - [X] Korean
  - [X] Spanish
  - [X] German
  - [X] French
  - [X] Portugese
  - [X] Russian 
  - [X] Arabic

### Video Presentation
Here's the video presentation of the SnapSeek: 
<br> 
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/05Od41FJGoo/0.jpg)](https://www.youtube.com/watch?v=05Od41FJGoo)
