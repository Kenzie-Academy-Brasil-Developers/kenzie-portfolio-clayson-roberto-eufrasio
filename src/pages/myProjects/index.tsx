// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "../home/style";
import { useNavigate } from "react-router-dom";
import { ProjectStack, ProjectStackTech } from "@/components/Project/style";
import { CardProjects, ContrainerProjetcs } from "./style";

export const MyProjects = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
              Meus projetos{" "}
            </Text>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <ContrainerProjetcs>
                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/bandkamp-generic-view-clayson`}
                  >
                    Bandkamp generic view
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/m5-kiosque-kenzie-clayson`}
                  >
                    Kiosque
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/m5-pet-kare-clayson-roberto-eufrasio`}
                  >
                    Pet kare
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/ClaysonRobertoEufrasio/S5-07-Atividade-Passo-a-passo-Estruturando-um-Projeto-do-Zero`}
                  >
                    Estrutura express do zero
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/ClaysonRobertoEufrasio/portfolio-clayson-roberto-eufrasio`}
                  >
                    Projeto salva vidas
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-hamburgueria-da-kenzie-ClaysonRobertoEufrasio`}
                  >
                    Projeto hamburgueria
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/react-atividade-s1-buscando-dados-na-api-rick-and-morty-ClaysonRobertoEufrasio`}
                  >
                    Projeto Rick Morty
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/m2-entrega-blog-m2-ClaysonRobertoEufrasio`}
                  >
                    Projeto Blog
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/m2-atividade-consultando-cep-na-api-viacep-sprint-3a-ClaysonRobertoEufrasio`}
                  >
                    Projeto Api Cep
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://github.com/Kenzie-Academy-Brasil-Developers/m2-atividade-the-dog-and-cat-api-sprint-3b-ClaysonRobertoEufrasio`}
                  >
                    Projeto Dog and Cat
                  </Button>
                </CardProjects>
              </ContrainerProjetcs>
            </ProjectsAreaSocialMediaMessage>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
