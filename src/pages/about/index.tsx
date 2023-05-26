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
                Me chamo Clayson tenho 34 anos sou de Sorocaba-SP, hoje moro em Florianópolis-SC, aqui foi onde conheci minha esposa e tivemos uma filha linda, anteriormente trabalhava como vendedor de alimentos e bebidas em um restaurante noturno, onde aprendi a desenvolver soft skill assim evoluindo tanto na minha comunicação como na minha organização, devido a pandemia o estabelecimento fechou e fomos todos demitidos. Neste período veio nossa filha e a vontade de mudar de área de trabalho, porém não sabia muito por onde começar e nem qual carreira seguir, um de nossos amigos que já trabalha como Full Stack me falou sobre essa área da tecnologia e como esse universo é gigantesco e cheio de oportunidades, foi onde comecei a ver videos de programação e conheci o Curso em Vídeo onde acabei concluindo alguns certificados nas linguagens Html, Css, JavaScript, entretanto ainda não sabia como iniciar na área, acabei conhecendo a Kenzie onde aprendi muito além do que eu imaginava sobre esse mundo da programação. Coisas novas linguagens como React, TypeScript, Style Components a como ter códigos limpos e como trabalhar semanticamente, com isso aumentando minha bagagem como programador,com mais de 40 projetos criados tanto individuais como em grupo, hoje sou formado como Desenvolvedor Full Stack.
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
