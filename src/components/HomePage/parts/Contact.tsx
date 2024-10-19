import { ArrowRight } from "lucide-react";
import type { ID_LABEL_TYPE } from "../const";

export default function Contact({
  handleSubmit,
  formData,
  handleInputChange,
  id,
}: {
  id: ID_LABEL_TYPE;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: { name: string; email: string; phone: string; message: string };
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) {
  return (
    <section id={id} className="py-16 bg-[#24201e] text-white px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">お問い合わせ</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold mb-2">
              お名前 (必須)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-[#24201e] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f08200]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2">
              メールアドレス (必須)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 text-[#24201e] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f08200]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block font-bold mb-2">
              電話番号
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 text-[#24201e] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f08200]"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-bold mb-2">
              お問い合わせ内容 (必須)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-3 py-2 text-[#24201e] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f08200]"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#f08200] text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-between min-w-[200px] mx-auto"
            >
              <span>送信</span>
              <span className="bg-white text-[#f08200] rounded-full p-1">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
