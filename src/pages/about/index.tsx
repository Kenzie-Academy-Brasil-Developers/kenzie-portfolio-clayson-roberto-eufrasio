// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

// Page Style
import {
  Header,
  HeaderContent,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
} from "../home/style";


export const About = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Sobre mim {" "}
            </Text>
            
          </HeaderContent>
        </Container>
      </Header>
      
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="p" type="body1" color="grey2">
              Me chamo Clayson tenho 34 anos sou de Sorocaba-SP, hoje moro em Florianópolis-SC, aqui foi onde conheci minha esposa e tivemos uma filha linda, anteriormente trabalhava como vendedor de alimentos e bebidas em um restaurante noturno, devido a pandemia o estabelecimento fechou e fomos todos demitidos. Neste período veio nossa filha e a vontade de mudar de área de trabalho porém não sabia muito por onde começar e nem qual carreira seguir, um de nossos amigos que já trabalha como Full Stack me falou sobre essa área da tecnologia, foi onde comecei a ver videos de programação e conheci o Curso em Vídeo onde acabei concluindo alguns certificados básico em Html, Css, JavaScript, entretanto ainda não sabia como iniciar na área, acabei conhecendo a Kenzie onde aprendi muito além do que eu imaginava sobre esse mundo da programação. 
              Coisas novas como React, TypeScript, Style Components e muito mais, com isso aumentando minha bagagem como programador hoje tenho uma base sólida sobre o Front-End, fora os desafios que ela me proporcionou, desde a ideia da montagem de um site até a entrega do mesmo. Sempre tive o sonho de viajar o mundo a fora e com a Kenzie esse objetivo não tem estado tão longe pretendo me forma este ano como desenvolvedor Full Stack conseguir um bom emprego onde eu possa não apenas estar ali mas contribuir com o crescimento num todo. Hoje não sou o mesmo de dois anos atraz minha bagagem na área de programação está cada dia aumentando mais e mais, com isso gostaria muito de poder mostrar o que venho aprendendo nesses últimos tempos e o quanto estou disposto a aprender coisas novas.
              </Text>
              
            </ProjectsAreaSocialMediaMessage>
            
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
