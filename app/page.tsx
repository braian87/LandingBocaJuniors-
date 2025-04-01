import Image from "next/image"
import { Facebook, Instagram, MessageCircle, Youtube } from "lucide-react"
import ContactForm from "@/components/contact-form"
import PlayerCard from "@/components/player-card"
import AchievementCard from "@/components/achievement-card"
import HistorySection from "@/components/history-section"
import WhatsAppButton from "@/components/whatsapp-button"
import MobileMenu from "@/components/mobile-menu"
import StreakCard from "@/components/streak-card"
import RecordCard from "@/components/record-card"
import StadiumSection from "@/components/stadium-section"

export default function Home() {
  const whatsappNumber = "+5491163604558"
  const whatsappUrl = `https://wa.me/${whatsappNumber}`

  const currentPlayers = [
    {
      name: "Sergio Romero",
      position: "Arquero",
      number: "1",
      nationality: "Argentina",
      description:
        "Experimentado arquero con pasado en la selección argentina y clubes europeos como Manchester United y AZ Alkmaar.",
      image: "/romero.png?height=200&width=300",
    },
    {
      name: "Luis Advíncula",
      position: "Lateral Derecho",
      number: "17",
      nationality: "Perú",
      description:
        "Lateral derecho peruano conocido por su velocidad y potencia física. Referente de la selección peruana.",
      image: "/advincula.png?height=200&width=300",
    },
    {
      name: "Marcos Rojo",
      position: "Defensor Central",
      number: "6",
      nationality: "Argentina",
      description:
        "Defensor con experiencia en la selección argentina y Manchester United. Líder de la defensa de Boca.",
      image: "/rojo.png?height=200&width=300",
    },
    {
      name: "Nicolás Figal",
      position: "Defensor Central",
      number: "4",
      nationality: "Argentina",
      description: "Defensor central con buena salida y capacidad para el juego aéreo. Pieza clave en la zaga xeneize.",
      image: "/figal.png?height=200&width=300",
    },
    {
      name: "Frank Fabra",
      position: "Lateral Izquierdo",
      number: "18",
      nationality: "Colombia",
      description: "Lateral izquierdo colombiano con gran proyección ofensiva y capacidad para el desborde.",
      image: "/fabra.png?height=200&width=300",
    },
    {
      name: "Guillermo 'Pol' Fernández",
      position: "Mediocampista",
      number: "8",
      nationality: "Argentina",
      description: "Mediocampista con buen manejo de balón y visión de juego. Pieza clave en la creación de juego.",
      image: "/pol.png?height=200&width=300",
    },
    {
      name: "Cristian Medina",
      position: "Mediocampista",
      number: "36",
      nationality: "Argentina",
      description:
        "Joven mediocampista surgido de las inferiores con gran proyección. Destaca por su dinámica y llegada al área.",
      image: "/medina.png?height=200&width=300",
    },
    {
      name: "Kevin Zenón",
      position: "Mediocampista",
      number: "11",
      nationality: "Argentina",
      description:
        "Mediocampista ofensivo con buena técnica y capacidad para el último pase. Una de las incorporaciones más destacadas.",
      image: "/zenon.png?height=200&width=300",
    },
    {
      name: "Exequiel Zeballos",
      position: "Extremo",
      number: "7",
      nationality: "Argentina",
      description:
        "Joven extremo con gran habilidad en el uno contra uno. Conocido como 'El Changuito', es una de las grandes promesas del club.",
      image: "/zeballos.png?height=200&width=300",
    },
    {
      name: "Miguel Merentiel",
      position: "Delantero",
      number: "16",
      nationality: "Uruguay",
      description: "Delantero uruguayo con gran capacidad goleadora. Destaca por su potencia y definición.",
      image: "/merentiel.png?height=200&width=300",
    },
    {
      name: "Edinson Cavani",
      position: "Delantero",
      number: "10",
      nationality: "Uruguay",
      description:
        "Estrella mundial con paso por PSG, Manchester United y Napoli. Goleador histórico de la selección uruguaya y referente del ataque xeneize.",
      image: "/cavani.png?height=200&width=300",
    },
    {
      name: "Javier García",
      position: "Arquero",
      number: "12",
      nationality: "Argentina",
      description:
        "Arquero experimentado que regresó al club donde se formó. Importante dentro del grupo por su liderazgo.",
      image: "/garcia.png?height=200&width=300",
    },
    {
      name: "Marcelo Saracchi",
      position: "Lateral Izquierdo",
      number: "3",
      nationality: "Uruguay",
      description:
        "Lateral izquierdo uruguayo con experiencia en Europa. Destaca por su buen pie y capacidad para el centro.",
      image: "/saracchi.png?height=200&width=300",
    },
    {
      name: "Lautaro Di Lollo",
      position: "Defensor Central",
      number: "30",
      nationality: "Argentina",
      description: "Joven defensor surgido de las inferiores con gran proyección. Destaca por su altura y juego aéreo.",
      image: "/dilollo.png?height=200&width=300",
    },
    {
      name: "Equi Fernández",
      position: "Mediocampista",
      number: "21",
      nationality: "Argentina",
      description:
        "Mediocampista central surgido de las inferiores. Destaca por su capacidad de recuperación y buen pie.",
      image: "/equi.png?height=200&width=300",
    },
    {
      name: "Jabes Saralegui",
      position: "Mediocampista",
      number: "29",
      nationality: "Argentina",
      description: "Joven mediocampista con proyección. Destaca por su dinámica y capacidad para sumarse al ataque.",
      image: "/saralegui.png?height=200&width=300",
    },
    {
      name: "Luca Langoni",
      position: "Extremo",
      number: "22",
      nationality: "Argentina",
      description: "Joven extremo surgido de las inferiores. Destaca por su velocidad y capacidad goleadora.",
      image: "/langoni.png?height=200&width=300",
    },
    {
      name: "Lucas Janson",
      position: "Extremo",
      number: "14",
      nationality: "Argentina",
      description: "Extremo con experiencia en el fútbol argentino. Destaca por su desequilibrio y llegada al gol.",
      image: "/janson.png?height=200&width=300",
    },
    {
      name: "Darío Benedetto",
      position: "Delantero",
      number: "9",
      nationality: "Argentina",
      description:
        "Goleador histórico del club en su segunda etapa. Referente del plantel con gran capacidad definidora.",
      image: "/benedetto.png?height=200&width=300",
    },
  ]

  const legendaryPlayers = [
    {
      name: "Juan Román Riquelme",
      position: "Mediocampista Ofensivo",
      era: "1996-2002, 2007-2014",
      description:
        "Considerado el máximo ídolo de la historia de Boca. Ganador de 3 Copas Libertadores y 1 Intercontinental. Actual presidente del club.",
      image: "/riquelme.png?height=200&width=300",
    },
    {
      name: "Diego Armando Maradona",
      position: "Mediocampista Ofensivo",
      era: "1981-1982, 1995-1997",
      description:
        "El mejor jugador de la historia del fútbol argentino. En Boca ganó el Metropolitano de 1981 y dejó una huella imborrable en el corazón de los hinchas.",
      image: "/maradona-boca.png?height=200&width=300",
    },
    {
      name: "Martín Palermo",
      position: "Delantero",
      era: "1997-2000, 2004-2011",
      description:
        "Máximo goleador histórico del club con 236 goles. Ganador de 6 títulos locales, 2 Copas Libertadores y 1 Intercontinental.",
      image: "/palermo.png?height=200&width=300",
    },
    {
      name: "Carlos Tevez",
      position: "Delantero",
      era: "2001-2004, 2015-2016, 2018-2021",
      description:
        "Ídolo moderno con tres etapas en el club. Ganador de la Copa Libertadores 2003 y la Intercontinental del mismo año ante el Milan.",
      image: "/tevez.png?height=200&width=300",
    },
    {
      name: "Roberto 'Ratón' Ayala",
      position: "Defensor Central",
      era: "1994-1995",
      description:
        "Defensor central de gran jerarquía que brilló en Boca antes de su exitosa carrera en Europa y la selección argentina.",
      image: "/ayala.png?height=200&width=300",
    },
    {
      name: "Oscar Córdoba",
      position: "Arquero",
      era: "1997-2001",
      description:
        "Arquero colombiano que fue figura en la época dorada del club. Ganador de 2 Libertadores y 1 Intercontinental.",
      image: "/cordoba.png?height=200&width=300",
    },
    {
      name: "Jorge Bermúdez",
      position: "Defensor Central",
      era: "1998-2001",
      description:
        "El 'Patrón', defensor colombiano líder de la defensa en la época dorada. Ganador de 2 Libertadores y 1 Intercontinental.",
      image: "/bermudez.png?height=200&width=300",
    },
    {
      name: "Hugo Ibarra",
      position: "Lateral Derecho",
      era: "1998-2001, 2002-2003, 2007-2010",
      description:
        "Lateral derecho con tres etapas en el club. Ganador de múltiples títulos locales e internacionales.",
      image: "/ibarra.png?height=200&width=300",
    },
    {
      name: "Sebastián Battaglia",
      position: "Mediocampista",
      era: "1998-2003, 2005-2013",
      description: "El jugador más ganador de la historia del club con 18 títulos. Referente del mediocampo xeneize.",
      image: "/battaglia.png?height=200&width=300",
    },
    {
      name: "Fernando Gago",
      position: "Mediocampista",
      era: "2004-2007, 2013-2015",
      description: "Mediocampista surgido de las inferiores con gran técnica. Tuvo una destacada carrera en Europa.",
      image: "/gago.png?height=200&width=300",
    },
    {
      name: "Guillermo Barros Schelotto",
      position: "Delantero",
      era: "1997-2007",
      description:
        "El 'Mellizo', delantero emblemático de la época dorada. Ganador de múltiples títulos locales e internacionales.",
      image: "/guillermo.png?height=200&width=300",
    },
    {
      name: "Alberto Márcico",
      position: "Mediocampista",
      era: "1992-1995",
      description: "El 'Beto', mediocampista de gran técnica que dejó su huella en el club en los años 90.",
      image: "/marcico.png?height=200&width=300",
    },
    {
      name: "Antonio Rattín",
      position: "Mediocampista",
      era: "1956-1970",
      description: "Leyenda del club y capitán histórico. Símbolo de la garra y el temperamento xeneize.",
      image: "/rattin.png?height=200&width=300",
    },
    {
      name: "Silvio Marzolini",
      position: "Lateral Izquierdo",
      era: "1960-1972",
      description:
        "Considerado el mejor lateral izquierdo de la historia del fútbol argentino. Ídolo de Boca en los años 60 y 70.",
      image: "/marzolini.png?height=200&width=300",
    },
    {
      name: "Roberto Mouzo",
      position: "Defensor",
      era: "1971-1984",
      description:
        "Jugador con más partidos en la historia del club (426). Símbolo de pertenencia y amor por la camiseta.",
      image: "/mouzo.png?height=200&width=300",
    },
  ]

  const internationalStars = [
    {
      name: "Dani Alves",
      position: "Lateral Derecho",
      era: "2023",
      nationality: "Brasil",
      description: "El jugador más ganador de la historia del fútbol. Tuvo un breve paso por Boca antes de retirarse.",
      image: "/alves.png?height=200&width=300",
    },
    {
      name: "Gary Medel",
      position: "Defensor/Mediocampista",
      era: "2009-2010",
      nationality: "Chile",
      description:
        "El 'Pitbull', defensor chileno conocido por su garra y temperamento. Referente de la selección chilena.",
      image: "/medel.png?height=200&width=300",
    },
    {
      name: "Walter Samuel",
      position: "Defensor Central",
      era: "1997-2000",
      nationality: "Argentina",
      description:
        "El 'Muro', defensor central de gran jerarquía que brilló en Boca antes de su exitosa carrera en Europa.",
      image: "/samuel.png?height=200&width=300",
    },
    {
      name: "Nicolás Lodeiro",
      position: "Mediocampista",
      era: "2015-2016",
      nationality: "Uruguay",
      description: "Mediocampista uruguayo de gran técnica que dejó su huella en el club antes de partir a la MLS.",
      image: "/lodeiro.png?height=200&width=300",
    },
    {
      name: "Fernando Gago",
      position: "Mediocampista",
      era: "2004-2007, 2013-2015",
      nationality: "Argentina",
      description:
        "Mediocampista surgido de las inferiores con gran técnica. Tuvo una destacada carrera en Real Madrid y Roma.",
      image: "/gago.png?height=200&width=300",
    },
    {
      name: "Ever Banega",
      position: "Mediocampista",
      era: "2014",
      nationality: "Argentina",
      description:
        "Mediocampista de gran técnica que tuvo un breve paso por el club. Destacó en Sevilla y la selección argentina.",
      image: "/banega.png?height=200&width=300",
    },
    {
      name: "Sergio 'Manteca' Martínez",
      position: "Delantero",
      era: "1997-1998",
      nationality: "Uruguay",
      description:
        "Delantero uruguayo que dejó su huella en el club con goles importantes, incluyendo el del título en la Supercopa 1989.",
      image: "/manteca.png?height=200&width=300",
    },
    {
      name: "Óscar Córdoba",
      position: "Arquero",
      era: "1997-2001",
      nationality: "Colombia",
      description:
        "Arquero colombiano que fue figura en la época dorada del club. Ganador de 2 Libertadores y 1 Intercontinental.",
      image: "/cordoba.png?height=200&width=300",
    },
    {
      name: "Jorge Bermúdez",
      position: "Defensor Central",
      era: "1998-2001",
      nationality: "Colombia",
      description:
        "El 'Patrón', defensor colombiano líder de la defensa en la época dorada. Ganador de 2 Libertadores y 1 Intercontinental.",
      image: "/bermudez.png?height=200&width=300",
    },
    {
      name: "Mauricio Serna",
      position: "Mediocampista",
      era: "1998-2002",
      nationality: "Colombia",
      description: "'Chicho', mediocampista colombiano de gran despliegue físico. Pieza clave en la época dorada.",
      image: "/serna.png?height=200&width=300",
    },
  ]

  const internationalAchievements = [
    {
      name: "Copa Intercontinental 2000",
      description: "Victoria 2-1 ante Real Madrid en Tokio, con goles de Martín Palermo y Roberto Nanni.",
      image: "/intercontinental2000.png?height=200&width=300",
    },
    {
      name: "Copa Intercontinental 2003",
      description: "Victoria por penales ante AC Milan en Tokio, tras empatar 1-1 con gol de Matías Donnet.",
      image: "/intercontinental2003.png?height=200&width=300",
    },
    {
      name: "Copa Libertadores 1977",
      description: "Primer título de Copa Libertadores, venciendo a Cruzeiro en la final.",
      image: "/libertadores1977.png?height=200&width=300",
    },
    {
      name: "Copa Libertadores 1978",
      description: "Bicampeonato de América, venciendo a Deportivo Cali en la final.",
      image: "/libertadores1978.png?height=200&width=300",
    },
    {
      name: "Copa Libertadores 2000",
      description:
        "Título obtenido bajo la dirección de Carlos Bianchi, venciendo a Palmeiras en la final por penales.",
      image: "/libertadores2000.png?height=200&width=300",
    },
    {
      name: "Copa Libertadores 2001",
      description:
        "Bicampeonato de América bajo la dirección de Carlos Bianchi, venciendo a Cruz Azul en la final por penales.",
      image: "/libertadores2001.png?height=200&width=300",
    },
    {
      name: "Copa Libertadores 2003",
      description: "Título obtenido bajo la dirección de Carlos Bianchi, venciendo a Santos en la final.",
      image: "/libertadores2003.png?height=200&width=300",
    },
    {
      name: "Copa Libertadores 2007",
      description: "Título obtenido bajo la dirección de Miguel Ángel Russo, venciendo a Gremio en la final.",
      image: "/libertadores2007.png?height=200&width=300",
    },
    {
      name: "Copa Sudamericana 2004",
      description: "Título obtenido venciendo a Bolívar en la final.",
      image: "/sudamericana2004.png?height=200&width=300",
    },
    {
      name: "Copa Sudamericana 2005",
      description: "Bicampeonato de la Copa Sudamericana, venciendo a Pumas UNAM en la final.",
      image: "/sudamericana2005.png?height=200&width=300",
    },
    {
      name: "Recopa Sudamericana 2005",
      description: "Victoria ante Once Caldas, campeón de la Copa Libertadores 2004.",
      image: "/recopa2005.png?height=200&width=300",
    },
    {
      name: "Recopa Sudamericana 2006",
      description: "Victoria ante São Paulo, campeón de la Copa Libertadores 2005.",
      image: "/recopa2006.png?height=200&width=300",
    },
    {
      name: "Recopa Sudamericana 2008",
      description: "Victoria ante Arsenal de Sarandí, campeón de la Copa Sudamericana 2007.",
      image: "/recopa2008.png?height=200&width=300",
    },
    {
      name: "Supercopa Sudamericana 1989",
      description: "Primer título internacional de la era moderna, venciendo a Independiente en la final.",
      image: "/supercopa1989.png?height=200&width=300",
    },
    {
      name: "Copa Máster de Supercopa 1992",
      description: "Victoria ante Cruzeiro en la final.",
      image: "/master1992.png?height=200&width=300",
    },
  ]

  const domesticAchievements = [
    {
      name: "Primera División - 35 títulos",
      description: "El club más ganador del fútbol argentino con 35 campeonatos de Primera División.",
      image: "/primera.png?height=200&width=300",
    },
    {
      name: "Copa Argentina - 4 títulos",
      description: "Campeón en 1969, 2012, 2015 y 2020.",
      image: "/copaargentina.png?height=200&width=300",
    },
    {
      name: "Supercopa Argentina - 1 título",
      description: "Campeón en 2018 venciendo a Rosario Central.",
      image: "/supercopa.png?height=200&width=300",
    },
    {
      name: "Copa de la Liga - 2 títulos",
      description: "Campeón en 2020 y 2022.",
      image: "/copaliga.png?height=200&width=300",
    },
    {
      name: "Copa Competencia - 1 título",
      description: "Campeón en 1925.",
      image: "/copacompetencia.png?height=200&width=300",
    },
    {
      name: "Copa Dr. Carlos Ibarguren - 5 títulos",
      description: "Campeón en 1919, 1923, 1924, 1940 y 1944.",
      image: "/ibarguren.png?height=200&width=300",
    },
    {
      name: "Copa Estímulo - 1 título",
      description: "Campeón en 1926.",
      image: "/estimulo.png?height=200&width=300",
    },
    {
      name: "Copa de Competencia Jockey Club - 2 títulos",
      description: "Campeón en 1919 y 1925.",
      image: "/jockeyclub.png?height=200&width=300",
    },
  ]

  const historySections = [
    {
      name: "Fundación (1905)",
      description:
        "Boca Juniors fue fundado el 3 de abril de 1905 por un grupo de inmigrantes italianos del barrio de La Boca. El nombre del club proviene del barrio, ubicado en la desembocadura (boca) del Riachuelo.",
      image: "/fundacion.png?height=200&width=300",
    },
    {
      name: "Era Amateur (1905-1930)",
      description:
        "Durante la era amateur, Boca consiguió 6 títulos de Primera División. En 1925, realizó una histórica gira por Europa, donde fue reconocido como 'campeón de honor' tras vencer a varios equipos importantes.",
      image: "/amateur.png?height=200&width=300",
    },
    {
      name: "Era Profesional (1931-presente)",
      description:
        "Desde el inicio del profesionalismo en 1931, Boca se consolidó como uno de los clubes más importantes de Argentina. Ha ganado 29 títulos de liga profesional, convirtiéndose en el club más ganador del país.",
      image: "/profesional.png?height=200&width=300",
    },
    {
      name: "Era Dorada (1998-2007)",
      description:
        "Bajo la dirección de Carlos Bianchi y posteriormente Miguel Ángel Russo, Boca vivió su época más gloriosa, ganando 4 Copas Libertadores y 2 Copas Intercontinentales, venciendo a equipos como Real Madrid y Milan.",
      image: "/dorada.png?height=200&width=300",
    },
  ]

  const streaks = [
    {
      title: "Invicto más largo",
      description: "40 partidos sin perder entre 1998 y 1999 bajo la dirección de Carlos Bianchi.",
      details:
        "Esta racha incluyó 26 victorias y 14 empates, estableciendo un récord en el fútbol argentino que duró hasta 2019.",
      image: "/invicto.png?height=200&width=300",
    },
    {
      title: "Mayor goleada a favor",
      description: "11-1 contra Tigre en 1992.",
      details:
        "El 7 de junio de 1992, Boca logró su mayor goleada en la era profesional con un contundente 11-1 sobre Tigre, con destacadas actuaciones de Batistuta y Latorre.",
      image: "/goleada.png?height=200&width=300",
    },
    {
      title: "Más partidos ganados consecutivos",
      description: "10 victorias consecutivas en 1998.",
      details:
        "Durante la primera etapa de Carlos Bianchi como entrenador, Boca logró 10 victorias consecutivas, estableciendo un récord para el club.",
      image: "/victorias.png?height=200&width=300",
    },
    {
      title: "Más títulos en una década",
      description: "12 títulos entre 1998 y 2008.",
      details:
        "En este período, Boca ganó 5 torneos locales, 4 Copas Libertadores, 2 Copas Intercontinentales y 1 Copa Sudamericana, convirtiéndose en el club más exitoso del mundo en ese período.",
      image: "/decada.png?height=200&width=300",
    },
    {
      title: "Más partidos sin recibir goles",
      description: "8 partidos consecutivos sin recibir goles en 2007.",
      details:
        "Durante la campaña de la Copa Libertadores 2007, Boca estableció un récord de 8 partidos consecutivos sin recibir goles, con Mauricio Caranta como arquero.",
      image: "/valla.png?height=200&width=300",
    },
    {
      title: "Más goles en un torneo",
      description: "91 goles en el Campeonato de 1931.",
      details:
        "En el primer torneo profesional de la historia argentina, Boca anotó 91 goles en 34 partidos, estableciendo un récord que aún se mantiene.",
      image: "/goles.png?height=200&width=300",
    },
  ]

  const records = [
    {
      title: "Máximo goleador",
      description: "Récord de más goles con la camiseta de Boca Juniors.",
      holder: "Martín Palermo",
      value: "236 goles",
      image: "/record-palermo.png?height=200&width=300",
    },
    {
      title: "Más partidos",
      description: "Récord de más partidos disputados con la camiseta xeneize.",
      holder: "Roberto Mouzo",
      value: "426 partidos",
      image: "/record-mouzo.png?height=200&width=300",
    },
    {
      title: "Más títulos como jugador",
      description: "Jugador con más títulos oficiales en la historia del club.",
      holder: "Sebastián Battaglia",
      value: "18 títulos",
      image: "/record-battaglia.png?height=200&width=300",
    },
    {
      title: "Más títulos como DT",
      description: "Entrenador con más títulos oficiales en la historia del club.",
      holder: "Carlos Bianchi",
      value: "9 títulos (4 Libertadores, 2 Intercontinentales, 3 locales)",
      image: "/record-bianchi.png?height=200&width=300",
    },
    {
      title: "Más goles en un partido",
      description: "Récord de más goles anotados por un jugador en un solo partido.",
      holder: "Martín Palermo",
      value: "5 goles vs. Vélez Sarsfield (1994)",
      image: "/record-palermo-5.png?height=200&width=300",
    },
    {
      title: "Más títulos internacionales",
      description: "Club argentino con más títulos internacionales oficiales.",
      holder: "Boca Juniors",
      value: "18 títulos internacionales",
      image: "/record-internacional.png?height=200&width=300",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-yellow-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-900/90 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo-boca.png" width={50} height={50} className="rounded-full" alt="Logo Boca Juniors" />
            <h1 className="text-2xl font-bold text-yellow-400">Boca Juniors</h1>
          </div>

          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#inicio" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#jugadores-actuales" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Jugadores Actuales
                </a>
              </li>
              <li>
                <a href="#leyendas" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Leyendas
                </a>
              </li>
              <li>
                <a href="#estrellas" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Estrellas Internacionales
                </a>
              </li>
              <li>
                <a href="#titulos-internacionales" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Títulos Internacionales
                </a>
              </li>
              <li>
                <a href="#titulos-locales" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Títulos Locales
                </a>
              </li>
              <li>
                <a href="#rachas" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Rachas
                </a>
              </li>
              <li>
                <a href="#records" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Récords
                </a>
              </li>
              <li>
                <a href="#historia" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Historia
                </a>
              </li>
              <li>
                <a href="#estadio" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Estadio
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-yellow-400 hover:text-yellow-300 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-6">Club Atlético Boca Juniors</h2>
          <p className="text-xl md:text-2xl text-yellow-300 max-w-3xl mx-auto">El club más grande de América</p>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg md:text-xl text-yellow-100 mb-8">
              El Club Atlético Boca Juniors, fundado el 3 de abril de 1905, es uno de los clubes más populares y
              exitosos de Argentina y América. Con 74 títulos oficiales, incluyendo 35 campeonatos de Primera División,
              6 Copas Libertadores y 3 Copas Intercontinentales, Boca es reconocido mundialmente por su historia, pasión
              y grandeza.
            </p>

            <div className="mt-12 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/boca-campeon.png?height=500&width=1000"
                alt="Boca Juniors Campeón"
                width={1000}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Current Players Section */}
      <section id="jugadores-actuales" className="py-16 md:py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Plantel Actual</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPlayers.map((player, index) => (
              <PlayerCard
                key={index}
                name={player.name}
                image={player.image}
                position={player.position}
                team={player.nationality}
                description={player.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Legendary Players Section */}
      <section id="leyendas" className="py-16 md:py-24 bg-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Leyendas</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {legendaryPlayers.map((player, index) => (
              <PlayerCard
                key={index}
                name={player.name}
                image={player.image}
                position={player.position}
                team={player.era}
                description={player.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* International Stars Section */}
      <section id="estrellas" className="py-16 md:py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
            Estrellas Internacionales
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalStars.map((player, index) => (
              <PlayerCard
                key={index}
                name={player.name}
                image={player.image}
                position={player.position}
                team={`${player.nationality} (${player.era})`}
                description={player.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* International Achievements Section */}
      <section id="titulos-internacionales" className="py-16 md:py-24 bg-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Títulos Internacionales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalAchievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                name={achievement.name}
                description={achievement.description}
                image={achievement.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Domestic Achievements Section */}
      <section id="titulos-locales" className="py-16 md:py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Títulos Locales</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticAchievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                name={achievement.name}
                description={achievement.description}
                image={achievement.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Streaks Section */}
      <section id="rachas" className="py-16 md:py-24 bg-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Rachas y Hazañas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {streaks.map((streak, index) => (
              <StreakCard
                key={index}
                title={streak.title}
                description={streak.description}
                details={streak.details}
                image={streak.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Records Section */}
      <section id="records" className="py-16 md:py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Récords</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {records.map((record, index) => (
              <RecordCard
                key={index}
                title={record.title}
                description={record.description}
                holder={record.holder}
                value={record.value}
                image={record.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="historia" className="py-16 md:py-24 bg-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Historia</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {historySections.map((section, index) => (
              <HistorySection key={index} name={section.name} description={section.description} image={section.image} />
            ))}
          </div>
        </div>
      </section>

      {/* Stadium Section */}
      <section id="estadio" className="py-16 md:py-24 bg-blue-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">La Bombonera</h2>

          <StadiumSection
            name="Estadio Alberto J. Armando"
            nickname="La Bombonera"
            capacity="54,000 espectadores"
            inauguration="25 de mayo de 1940"
            address="Brandsen 805, La Boca, Buenos Aires"
            description="Conocido mundialmente como 'La Bombonera', el estadio de Boca Juniors es famoso por su peculiar forma de 'D' y por la increíble acústica que genera. Su apodo se debe a su parecido con una caja de bombones. Es considerado uno de los estadios más emblemáticos y temidos del mundo por su ambiente y la presión que ejerce sobre los rivales."
            curiosities={[
              "El estadio 'late' cuando los hinchas saltan, generando un efecto vibratorio único",
              "FIFA lo catalogó como uno de los estadios 'para visitar antes de morir'",
              "Su diseño en tres bandejas permite una visibilidad perfecta desde cualquier ubicación",
              "El arquitecto esloveno Viktor Sulčič fue el encargado de su diseño",
            ]}
            image="/bombonera.png?height=500&width=1000"
          />
        </div>
      </section>

      {/* About Us */}
      <section id="nosotros" className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Sobre Boca Juniors</h2>

            <div className="bg-blue-900/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-yellow-500">
              <p className="text-lg text-yellow-100 mb-6">
                Con <span className="font-bold">más de 118 años de historia</span>, Boca Juniors es uno de los clubes
                más exitosos y populares del mundo, con millones de hinchas en Argentina y en todo el planeta.
              </p>

              <p className="text-lg text-yellow-100 mb-6">
                El club ha tenido el privilegio de contar entre sus filas con algunos de los mejores jugadores de la
                historia, como Diego Armando Maradona, Juan Román Riquelme, Martín Palermo y Carlos Tevez, quienes han
                dejado una huella imborrable en la institución.
              </p>

              <p className="text-lg text-yellow-100">
                Actualmente, Boca Juniors es presidido por Juan Román Riquelme, uno de los máximos ídolos de la historia
                del club, quien busca devolver al equipo a la gloria internacional y mantener su hegemonía a nivel
                local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-blue-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">Contáctanos</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-900 rounded-xl p-8 shadow-lg border border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Información de Contacto</h3>

              <div className="space-y-4 text-yellow-100">
                <p className="flex items-center gap-3">
                  <MessageCircle className="text-yellow-400" />
                  <span>WhatsApp: </span>
                  <a href={whatsappUrl} className="text-yellow-400 hover:underline">
                    {whatsappNumber}
                  </a>
                </p>

                <p className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email: </span>
                  <a href="mailto:contacto@bocajuniors.com.ar" className="text-yellow-400 hover:underline">
                    contacto@bocajuniors.com.ar
                  </a>
                </p>

                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-yellow-400"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Ubicación: </span>
                </div>
                <address className="not-italic pl-10 text-yellow-100">
                  Brandsen 805, La Boca, Buenos Aires, Argentina
                </address>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-yellow-400 mb-6">Síguenos</h3>

                <div className="flex gap-4">
                  <a href="#" className="bg-blue-800 hover:bg-blue-700 transition-colors p-3 rounded-full">
                    <Instagram className="text-yellow-400 h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </a>

                  <a href="#" className="bg-blue-800 hover:bg-blue-700 transition-colors p-3 rounded-full">
                    <Youtube className="text-yellow-400 h-6 w-6" />
                    <span className="sr-only">YouTube</span>
                  </a>

                  <a href="#" className="bg-blue-800 hover:bg-blue-700 transition-colors p-3 rounded-full">
                    <Facebook className="text-yellow-400 h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 rounded-xl p-8 shadow-lg border border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6">Envíanos un Mensaje</h3>
              <ContactForm whatsappNumber={whatsappNumber} />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-950 text-yellow-100 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <img src="/logo-boca.png" width={50} height={50} className="rounded-full" alt="Logo Boca Juniors" />
              <h2 className="text-xl font-bold text-yellow-400">Boca Juniors</h2>
            </div>

            <p className="text-sm text-yellow-200">
              &copy; {new Date().getFullYear()} Club Atlético Boca Juniors. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton whatsappNumber={whatsappNumber} />
    </main>
  )
}

