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
                    href={`https://portifolio-gamma-rouge.vercel.app/home`}
                  >
                    Projeto salva vidas
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://react-entrega-s1-hamburgueria-da-kenzie-claysonrobertoeufrasio.vercel.app`}
                  >
                    Projeto hamburgueria
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://react-atividade-s1-buscando-m-git-4cd61a-claysonrobertoeufrasio.vercel.app/`}
                  >
                    Projeto Rick Morty
                  </Button>
                </CardProjects>

                <CardProjects>
                  <Button
                    type="primary"
                    target="_blank"
                    as="a"
                    href={`https://react-entrega-s2-formulario-de-cadastro-claysonrobertoeufrasio.vercel.app/PageRegistration`}
                  >
                    Projeto registro pessoal
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
