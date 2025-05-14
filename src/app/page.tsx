import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-top bg-black text-white p-6">
      <Head>
        <title>Wajahat Ali | Full-Stack Web Developer</title>
        <meta name="description" content="Wajahat Ali is a full-stack web developer passionate about building responsive, user-friendly web applications." />
        <meta name="keywords" content="Wajahat Ali, Wajahat Faryad, Wajahat Faryad Ali, UI Developer, Full-Stack Developer, Web Developer, Portfolio, JavaScript Developer, Frontend, Backend, Next.js, React Js" />
        <meta name="author" content="Wajahat Ali" />
        <meta property="og:title" content="Wajahat Ali | Full-Stack Web Developer" />
        <meta property="og:description" content="Clean, modern, and user-friendly full-stack web development by Wajahat Ali." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/preview.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      <main className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4">Hi, I’m Wajahat Ali — Full-Stack Web Developer</h1>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          I’m a dedicated full-stack web developer with a passion for creating clean, functional, and user-friendly web applications. I enjoy working on both the frontend and backend, turning ideas into fully working digital experiences.
        </p>
        <p className="text-md text-lg font-medium text-gray-200 mb-6">
          Feel free to reach out if you’d like to collaborate or work together on something great.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="mailto:wajahatfaryadali@gmail.com" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">Email Me</a>
          <a href="https://www.instagram.com/wajahatfaryadali" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition">Instagram</a>
          <a href="https://wa.me/923084352824" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 rounded-xl hover:bg-green-600 transition">WhatsApp</a>
        </div>
      </main>
    </div>
  )
}