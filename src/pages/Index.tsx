import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import EventCountdown from "@/components/EventCountdown";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            {/* Удалил логотип из шапки */}
          </div>
          <div>
            <Button className="bg-[#AE4A84] hover:bg-[#94366E] text-white">
              Записаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img
                src="https://cdn.poehali.dev/files/1707391a-3408-4ae6-b6f8-2b8e4d783ed0.svg"
                alt="FORMA Logo"
                className="h-16 md:h-20"
              />
            </div>
            <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#2A2A2A] mb-6">
              MiraLine: алгоритмы гибридных протоколов
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              в зависимости от анатомических и возрастных особенностей лица
            </p>
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <div className="flex flex-col md:flex-row justify-around items-center text-center gap-4">
                <div className="flex flex-col items-center">
                  <Icon
                    name="Calendar"
                    className="h-10 w-10 text-[#AE4A84] mb-2"
                  />
                  <p className="text-gray-800 font-semibold">19 мая</p>
                  <p className="text-gray-600">10:30</p>
                </div>
                <div className="hidden md:block h-16 w-px bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <Icon
                    name="MapPin"
                    className="h-10 w-10 text-[#AE4A84] mb-2"
                  />
                  <p className="text-gray-800 font-semibold">г. Москва</p>
                  <p className="text-gray-600">ул. Спартаковская, 6, стр.1</p>
                </div>
                <div className="hidden md:block h-16 w-px bg-gray-200"></div>
                <div className="flex flex-col items-center">
                  <Icon
                    name="Building"
                    className="h-10 w-10 text-[#AE4A84] mb-2"
                  />
                  <p className="text-gray-800 font-semibold">Учебный центр</p>
                  <p className="text-gray-600">FORMA</p>
                </div>
              </div>
            </div>
            <EventCountdown />
            <Button className="bg-[#AE4A84] hover:bg-[#94366E] text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              Зарегистрироваться на семинар
            </Button>
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-center mb-12 text-[#2A2A2A]">
              Спикер <span className="text-[#AE4A84]">мероприятия</span>
            </h2>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <img
                  src="/speaker.jpg"
                  alt="Елена Разумовская"
                  className="rounded-xl shadow-md w-full max-w-sm mx-auto"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D";
                  }}
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="font-playfair text-2xl font-bold text-[#AE4A84] mb-2">
                  Разумовская Елена Александровна
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-[#AE4A84] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Врач-косметолог, пластический хирург</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-[#AE4A84] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Главный врач клиники «Ренессанс-Косметология»</span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-[#AE4A84] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>
                      Член Экспертного Совета по ботулинотерапии, ОПРЭХ, ISPAS,
                      ОСЭМ, EADV
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Icon
                      name="CheckCircle"
                      className="h-5 w-5 text-[#AE4A84] mr-2 mt-1 flex-shrink-0"
                    />
                    <span>Эксперт LOTOS UNITED</span>
                  </li>
                </ul>
                <Separator className="my-4" />
                <p className="text-gray-600 italic">
                  "Современная косметология требует комплексного подхода и
                  глубокого понимания анатомических особенностей каждого
                  пациента. На семинаре мы рассмотрим инновационные методики и
                  алгоритмы, которые помогут повысить эффективность ваших
                  процедур."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-16 bg-[#F5F5F7]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-center mb-4 text-[#2A2A2A]">
              Особенности <span className="text-[#AE4A84]">программы</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12">
              Применение препаратов MIRALINE и технология MFU - ULTIGHT в
              протоколах
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "ROCKSTAR - BEAUTY",
                  icon: "Sparkles",
                  description:
                    "Инновационные протоколы для естественного омоложения кожи",
                },
                {
                  title: "ROCKSTAR - LIFT",
                  icon: "ArrowUp",
                  description:
                    "Передовые техники для нехирургического лифтинга тканей",
                },
                {
                  title: "ROCKSTAR - SLIM",
                  icon: "Scissors",
                  description:
                    "Эффективное моделирование овала лица при разных морфотипах",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="border-none hover:shadow-lg transition-all"
                >
                  <CardContent className="p-6 text-center">
                    <div className="h-16 w-16 bg-[#AE4A84] text-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name={item.icon} className="h-8 w-8" />
                    </div>
                    <h3 className="font-playfair text-xl font-bold mb-3 text-[#2A2A2A]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">
                Детальный разбор протоколов при разных морфотипах старения
              </p>
              <Button className="bg-white hover:bg-gray-50 text-[#AE4A84] border border-[#AE4A84] hover:border-[#94366E] transition-all">
                Подробная программа
                <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold text-center mb-4 text-[#2A2A2A]">
              Место <span className="text-[#AE4A84]">проведения</span>
            </h2>
            <p className="text-center text-lg text-gray-600 mb-8">
              Современный учебный центр FORMA в центре Москвы
            </p>

            <div className="bg-[#F5F5F7] rounded-xl overflow-hidden shadow-md">
              <div className="h-80 bg-gray-300 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.960752286405!2d37.67557047775533!3d55.770567096668616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a67047fb975%3A0x4e08a93604a8f1b1!2z0KHQv9Cw0YDRgtCw0LrQvtCy0YHQutCw0Y8g0YPQuy4sIDYg0YHRgtGA0L7QtdC90LjQtSAxLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTA1MDgy!5e0!3m2!1sru!2s!4v1715170845979!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      Учебный центр FORMA
                    </h3>
                    <p className="text-gray-600 mb-1">
                      г. Москва, ул. Спартаковская, 6, стр.1
                    </p>
                    <p className="text-gray-600 flex items-center">
                      <Icon
                        name="MapPin"
                        className="h-4 w-4 mr-1 text-[#AE4A84]"
                      />
                      Метро Бауманская (5 минут пешком)
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button className="bg-[#AE4A84] hover:bg-[#94366E] text-white">
                      <Icon name="Navigation" className="mr-2 h-4 w-4" />
                      Построить маршрут
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-gradient-to-b from-[#F5F5F7] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100 text-center">
              <h2 className="font-inter text-3xl font-bold text-center mb-2 text-[#2A2A2A]">
                Регистрация <span className="text-[#AE4A84]">на семинар</span>
              </h2>

              <div className="bg-[#F5F5F7] rounded-lg p-4 mb-8 inline-block">
                <p className="text-[#AE4A84] font-bold text-xl">
                  Участие бесплатное
                </p>
                <p className="text-gray-600">Количество мест ограничено</p>
              </div>

              <div className="space-y-6">
                <Button className="w-full md:w-2/3 mx-auto bg-[#AE4A84] hover:bg-[#94366E] text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  Записаться на семинар
                </Button>

                <p className="mt-6 text-gray-600">
                  Или позвоните нам для регистрации:{" "}
                  <a
                    href="tel:89223060673"
                    className="font-bold text-[#AE4A84]"
                  >
                    8 (922) 306-06-73
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2A2A2A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img
                src="/forma-logo-white.png"
                alt="FORMA Logo"
                className="h-8"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/120x40?text=FORMA&bg=2A2A2A&fg=FFFFFF";
                }}
              />
              <p className="text-sm text-gray-400 mt-1">
                © 2024 FORMA. Все права защищены.
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
              <a
                href="tel:89223060673"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
