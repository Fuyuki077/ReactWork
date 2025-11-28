import CardNav from './CardNav'
import logo from './logo.svg';
import '../../Home/styleText.css';


const Menu = () => {
  const items = [
    {
      label: "Resumo",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Inicio", href: "#"}
      ]
    },
    {
      label: "Projeto", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Introdução", href: "#1" },
        { label: "Fundamentação Teórica", href: "#2" },
        { label: "Objetivos", href: "#3" },
        { label: "Trabalhos Correlatos", href: "#4" },
        { label: "Metodologia", href: "#5" },
        { label: "Cronograma e Referências", href: "#6" }
      ]
    },
    {
      label: "Codigo",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Desenvolvido em React + Vite" },
        { label: "Reactbits", href: "https://reactbits.dev"  }
      ]
    }
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#ffffffff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
    />
  );
};
export default Menu;