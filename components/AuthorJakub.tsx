import React from "react";
import Image from "next/image";

export const AuthorJakub = () => {
  return (
    <div className="prose lg:prose-lg">
      <h2 className="mt-2 mb-8 leading-9 font-extrabold sm:text-3xl sm:leading-10 lg:text-4xl lg:leading-none">
        Jakub
      </h2>

      <div className="flex justify-center">
        <Image src="/neander.png" width={300} height={300} />
      </div>

      <p>
        Jakub jest programistą z ponad 15-letnim doświadczeniem zawodowym.
        Karierę rozpoczynał w 2003 od pracy w
        <a href="http://www.man.poznan.pl/online/pl/">
          Poznańskim Centrum Superkomputerowo Sieciowym
        </a>{" "}
        pracując nad systemami kolejkowymi dla komputerów SPARC oraz
        nadintegracją usług
        <a href="http://vlab.psnc.pl/">Wirtualnego Laboratorium</a> w
        technologii SOAP. W następnych latach pracował w Banku Zachodnim WBK
        (obecnie <a href="https://www.santander.pl/">Santander</a>) jako
        programista, projektant i architekt aplikacji <strong>Java EE</strong>,
        m.in. przy budowie systemu bankowości elektronicznej Centrum24.
      </p>

      <p>
        Studiował informatykę (ze specjalizacją w sztucznej inteligencji) na{" "}
        <a href="https://wmi.amu.edu.pl/pl/">
          Uniwersytecie im. Adama Mickiewicza
        </a>{" "}
        w Poznaniu i{" "}
        <a href="http://www.u-psud.fr/en/index.html">Universite Paris-Sud XI</a>{" "}
        w Paryżu. Pracował w laboratorium informatycznym LIMSI w Paryżu.
        Stypendysta Rządu Francuskiego, w ramach którego realizował projekt z
        dziedziny sztucznej inteligencji dt. przetwarzania informacji
        przestrzenno-czasowej w tekstach języka naturalnego. Studiował także
        biznes elektroniczny i nowoczesne technologie na{" "}
        <a href="https://www.hec.edu/en">HEC Paris</a> oraz{" "}
        <a href="https://www.telecom-paris.fr/">Telecom Paristech</a> w Paryżu.
      </p>
      <p>
        Od 2011 prowadzi we Francji firmę informatyczną, która obługuje klientów
        korporacyjnych i instytucje rządowe.
      </p>
      <p>
        Od 2006 w ramach hobby organizuje konferencje programistyczne.
        Pomysłowadca pierwszej w Polsce konferencji dotyczących języków
        programowania <strong>Python</strong> i <strong>Ruby</strong> o nazwie
        RuPy. W latach 2014-2017 organizował konferencję{" "}
        <a href="https://polyconf.com/">PolyConf</a>, która promuje mniej znane
        języki programowania. Konferencje odbywały się w Polsce, w Czechach, na
        Węgrzech, we Francji i w Brazylii.
      </p>

      <hr className="my-6" />

      <a
        className="bg-white text-blue-400 text-2xl font-normal focus:outline-none mr-2"
        href="https://twitter.com/zaiste"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className="bg-white text-gray-900 text-2xl font-normal focus:outline-none mr-2"
        href="https://github.com/zaiste/"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        className="bg-white text-gray-900 text-2xl font-normal focus:outline-none mr-2"
        href="https://zaiste.net/"
      >
        <i className="fas fa-link"></i>
      </a>
    </div>
  );
};
