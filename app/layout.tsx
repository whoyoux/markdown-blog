export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <title>Markdown blog</title>
      </head>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
