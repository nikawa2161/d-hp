import { ArrowRight, BarChart2, Briefcase } from "lucide-react";
import type { ID_LABEL_TYPE } from "../const";

export default function Services({ id }: { id: ID_LABEL_TYPE }) {
  return (
    <section id={id} className="bg-[#24201e] text-white py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">事業内容</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <Briefcase className="mx-auto text-6xl mb-4 text-[#f08200]" />
            <h3 className="text-xl font-bold mb-2">アプリケーション開発</h3>
            <p className="mb-4">
              最新の技術、豊富なプロジェクト経験を活かし、
              お客様のニーズに合わせた高品質なアプリケーションを
              開発します。Web系からネイティブアプリまで、
              幅広いプラットフォームに対応しています。
            </p>
            <button className="bg-[#f08200] text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-between min-w-[200px] mx-auto">
              <span>詳しくはこちら</span>
              <span className="bg-white text-[#f08200] rounded-full p-1">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
          <div className="text-center">
            <BarChart2 className="mx-auto text-6xl mb-4 text-[#f08200]" />
            <h3 className="text-xl font-bold mb-2">開発実績</h3>
            <p className="mb-4">
              - 業務系システム
              <br />
              - ECサイト
              <br />
              - SNSアプリケーション
              <br />
              - IoTシステム
              <br />
              - AI/機械学習システム
              <br />- ブロックチェーンアプリケーション
            </p>
            <button className="bg-[#f08200] text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-between min-w-[200px] mx-auto">
              <span>詳しくはこちら</span>
              <span className="bg-white text-[#f08200] rounded-full p-1">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
