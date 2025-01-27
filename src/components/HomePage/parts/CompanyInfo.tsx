import { Mail, Phone, MapPin, Calendar, DollarSign, Users } from "lucide-react";
import { COMPANY_NAME, type ID_LABEL_TYPE } from "../const";

const CompanyInfoCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start">
    <div className="bg-[#f08200] rounded-full p-3 mb-4">
      <Icon className="h-6 w-6 text-white" />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function CompanyInfo({ id }: { id: ID_LABEL_TYPE }) {
  return (
    <>
      <section
        id={id}
        className="py-16 px-6 bg-gradient-to-r from-[#f08200] to-[#ffa726]"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            会社情報
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CompanyInfoCard
              icon={MapPin}
              title="会社"
              description={COMPANY_NAME}
            />
            <CompanyInfoCard
              icon={Calendar}
              title="設立日"
              description="2024年10月14日"
            />
            <CompanyInfoCard
              icon={DollarSign}
              title="資本金"
              description="5,000,000円"
            />
            <CompanyInfoCard
              icon={Users}
              title="代表者"
              description="代表取締役 中島 大輔"
            />
            <CompanyInfoCard
              icon={Phone}
              title="電話番号（仮）"
              description="03-1234-5678"
            />
            <CompanyInfoCard
              icon={Mail}
              title="メールアドレス（仮）"
              description="info@pp-network.com"
            />
          </div>
        </div>
      </section>
    </>
  );
}
