import { useState, useEffect } from "react";
import { Top, CompanyInfo, Recruitment, Contact, About } from "./parts";
import { ID_LABEL } from "./const";
import Services from "./parts/Services";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server
  };

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement)
        .getAttribute("href")
        ?.slice(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    };

    const links = document.querySelectorAll('header a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", smoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener("click", smoothScroll));
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-[#24201e] bg-opacity-80 text-white p-4 sticky top-0 z-50 backdrop-blur-sm">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">〇〇株式会社</h1>
          <div className="space-x-4">
            <a href={`#${ID_LABEL.ABOUT}`} className="hover:text-gray-300">
              ABOUT
            </a>
            <a href={`#${ID_LABEL.SERVICES}`} className="hover:text-gray-300">
              事業内容
            </a>
            <a href={`#${ID_LABEL.CONTACT}`} className="hover:text-gray-300">
              お問い合わせ
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Top id={ID_LABEL.TOP} />
        <About id={ID_LABEL.ABOUT} />
        <CompanyInfo id={ID_LABEL.COMPANY_INFO} />
        <Services id={ID_LABEL.SERVICES} />
        <Recruitment id={ID_LABEL.RECRUITMENT} />
        <Contact
          handleSubmit={handleSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          id={ID_LABEL.CONTACT}
        />
      </main>

      <footer className="bg-[#24201e] text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 〇〇株式会社. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
