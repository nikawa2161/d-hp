import { ArrowRight } from "lucide-react";
import type { ID_LABEL_TYPE } from "../const";

export default function Recruitment({ id }: { id: ID_LABEL_TYPE }) {
  return (
    <section id={id} className="bg-gradient-to-r from-[#f08200] to-[#ffa726] text-[#24201e] py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">採用情報</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">募集職種</h3>
            <ul className="mb-4">
              <li>エンジニア</li>
              <li>デザイナー</li>
              <li>プロジェクトマネージャー</li>
              <li>営業</li>
            </ul>
            <button className="bg-[#24201e] text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-between min-w-[200px] mx-auto">
              <span>詳しくはこちら</span>
              <span className="bg-[#f08200] rounded-full p-1">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">応募方法</h3>
            <ul className="mb-4">
              <li>履歴書をメールにて送付してください。</li>
              <li>書類選考の上、面接日をご連絡いたします。</li>
              <li>お問い合わせフォームからのご応募も可能です。</li>
            </ul>
            <button className="bg-[#24201e] text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-between min-w-[200px] mx-auto">
              <span>詳しくはこちら</span>
              <span className="bg-[#f08200] rounded-full p-1">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
