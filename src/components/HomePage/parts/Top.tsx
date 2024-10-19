import type { ID_LABEL_TYPE } from "../const";

export default function Top({ id }: { id: ID_LABEL_TYPE }) {
  return (
    <>
      <section id={id} className="relative bg-gradient-to-r from-[#f08200] to-[#856f4e] text-white py-20 px-6 min-h-screen flex items-center">
        <img
          src="/human.webp"
          alt="背景画像"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
        />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-shadow-lg">
            あなたの才能が輝く場所で、
            <br />
            新たなスタートを共に踏み出し、
            <br />
            未来を拓こう
          </h2>
          <p className="mb-8 text-shadow">私たちは一緒に未来を作りません。</p>
        </div>
      </section>
    </>
  );
}
