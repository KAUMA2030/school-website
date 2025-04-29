function Section({ title, content }) {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="max-w-2xl">{content}</p>
    </section>
  );
}

export default Section;