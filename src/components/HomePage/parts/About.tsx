import { ArrowRight } from "lucide-react";
import type { ID_LABEL_TYPE } from "../const";

export default function About({ id }: { id: ID_LABEL_TYPE }) {
  return (
    <section id={id} className="bg-[#24201e] text-white py-16 px-6">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">会社理念</h2>
        <p className="max-w-2xl mx-auto mb-8">
          人と人がつながり、人とコンピュータがつながり、新しい価値を創造し、新しいサービスを提供し、
          そして新しい未来への扉を開きます。私たちはそんな会社を目指しています。
        </p>
        <button className="bg-[#f08200] text-white px-6 py-3 rounded-full hover:bg-opacity-80 transition duration-300 flex items-center justify-between min-w-[200px] mx-auto">
          <span>詳しくはこちら</span>
          <span className="bg-white text-[#f08200] rounded-full p-1">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>
    </section>
  );
}
