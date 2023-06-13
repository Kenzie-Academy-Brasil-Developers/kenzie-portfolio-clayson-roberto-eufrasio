// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

// Page Style
import {
  Header,
  HeaderContent,
  ProjectsArea,
  ProjectAreaWrapperColumns,
  ProjectsAreaSocialMediaMessageAbout,
} from "../home/style";

export const About = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Sobre mim{" "}
            </Text>
          </HeaderContent>
        </Container>
      </Header>

      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessageAbout>
              <Text className="aboutMe" as="p" type="body1" color="grey2">
                Me chamo Clayson tenho 34 anos sou de Sorocaba-SP, hoje moro em Florianópolis-SC, aqui foi onde conheci minha esposa e tivemos uma filha linda. Sou um desenvolvedor de software altamente qualificado e versátil, com experiência em uma ampla gama de tecnologias e metodologias. Minhas habilidades incluem HTML5, CSS3 e Web Semântica, o que me permite criar aplicativos da Web visualmente atraentes e acessíveis. Sou proficiente em JavaScript (ES6), com um forte entendimento de lógica de programação e experiência em programação orientada a objetos e funcional. Tenho amplo conhecimento de sistemas de controle de versão, particularmente Git, e sou bem versado em metodologias ágeis como Scrum e Kanban. Tenho experiência prática trabalhando com ferramentas de gerenciamento de projetos como JIRA e Trello, bem como plataformas de controle de versão como GitHub. A qualidade é de extrema importância para mim e tenho experiência com desenvolvimento orientado a testes usando Jest e desenvolvimento orientado a comportamento com Cucumber. Também tenho uma sólida compreensão dos fundamentos do UX, garantindo que os aplicativos que desenvolvo sejam fáceis de usar e intuitivos. Trabalhei extensivamente com React, utilizando hooks para gerenciamento de estado e Redux para aplicações mais complexas. Sou adepto da componentização e tenho experiência com várias bibliotecas de componentes. Além disso, sou especialista em consumo de API e criei APIs RESTful usando Node.js e Express. Também sou proficiente em TypeScript e já trabalhei com bancos de dados SQL, especificamente PostgreSQL, bem como estruturas ORM como TypeORM e MongoDB. Além de minhas habilidades de desenvolvimento web, tenho experiência com Amazon AWS, incluindo lidar com migrações e implantar aplicativos na plataforma. Estou familiarizado com jQuery e Next.js, e já trabalhei com Python e Django. No geral, sou um desenvolvedor completo com uma base sólida em desenvolvimento da Web e uma paixão por fornecer software de alta qualidade. Estou constantemente expandindo meu conjunto de habilidades e me mantendo atualizado com as últimas tendências e tecnologias do setor.
                <Text className="aboutMe" as="p" type="body1" color="grey2">
                  Principais competências:
                </Text>
                HTML5 | CSS3 | Web Semântica | JavaScript (ES6) | Lógica de | programação | Controle de versão com git | Programação Orientada a Objetos | Programação Funcional | Metodologias Ágeis | Scrum | Kanban | JIRA | Trello | Github | Qualidade | TDD com Jest | BDD com Cucumber | Noções de UX | React | Hooks | State Management | Redux | Componentização, uso de bibliotecas de componentes | Consumo de APIs | NodeJs | Express | TypeScript | Banco de dados SQL | PostgreSQL | Construção de APIs RESTful | Programação assíncrona | Python | Django | ORM | TypeORM | MongoDB | Amazon AWS | Migrations | JQuery | Next | ChakraUi |
              </Text>
            </ProjectsAreaSocialMediaMessageAbout>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
