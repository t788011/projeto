import { Routes } from '@angular/router';

import { InicioComponent as InicioHomeComponent } from './home/pages/inicio/inicio.component';
import { AprenderCaaComponent } from './home/pages/aprender-caa/aprender-caa.component';
import { PictogramasComponent } from './home/pages/pictogramas/pictogramas.component';
import { TermosDeUtilizacaoComponent } from './home/pages/termos-de-utilizacao/termos-de-utilizacao.component';
import { SobreNosComponent } from './home/pages/sobre-nos/sobre-nos.component';
import { FonoaudiologosComponent as FonoaudiologosHomeComponent } from './home/pages/fonoaudiologos/fonoaudiologos.component';
import { ContacteNosComponent } from './home/pages/contacte-nos/contacte-nos.component';
import { PagamentosComponent as PagamentosHomeComponent} from './home/pages/pagamentos/pagamentos.component';
import { EntrevistasComponent as EntrevistasHomeComponent } from './home/pages/entrevistas/entrevistas.component';
import { SistemaComponent } from './home/pages/sistema/sistema.component';
import { ComunicacaoComponent } from './home/pages/comunicacao/comunicacao.component';

import { LoginComponent } from './login/login.component';

import { InicioComponent as InicioCadastroComponent } from './cadastro/pages/inicio/inicio.component';
import { CadastroFonoComponent } from './cadastro/pages/cadastro-fono/cadastro-fono.component';
import { CadastroPacienteComponent } from './cadastro/pages/cadastro-paciente/cadastro-paciente.component';

import { InicioComponent as InicioFinanceiroComponent } from './financeiro/pages/inicio/inicio.component';
import { PagamentosComponent as PagamentosFinanceiroComponent } from './financeiro/pages/pagamentos/pagamentos.component';
import { FonoaudiologosComponent as FonoaudiologosFinanceiroComponent } from './financeiro/pages/fonoaudiologos/fonoaudiologos.component';
import { PacientesComponent } from './financeiro/pages/pacientes/pacientes.component';
import { MeusDadosComponent as MeusDadosFinanceiroComponent} from './financeiro/pages/meus-dados/meus-dados.component';
import { CadastrarSociosComponent } from './financeiro/pages/cadastrar-socios/cadastrar-socios.component';

import { InicioComponent as InicioFonoComponent } from './fono/pages/inicio/inicio.component';
import { GerenciarPictogramasComponent } from './fono/pages/gerenciar-pictogramas/gerenciar-pictogramas.component';
import { CadastrarParceirosComponent } from './fono/pages/cadastrar-parceiros/cadastrar-parceiros.component';
import { EditarParceirosComponent } from './fono/pages/editar-parceiros/editar-parceiros.component';
import { RelatoriosComponent } from './fono/pages/relatorios/relatorios.component';
import { MeusDadosComponent as MeusDadosFonoComponent} from './fono/pages/meus-dados/meus-dados.component';
import { DadosDePacientesComponent } from './fono/pages/dados-de-pacientes/dados-de-pacientes.component';
import { EntrevistasComponent as EntrevistasFonoComponent } from './fono/pages/entrevistas/entrevistas.component';

import { InicioComponent as InicioPacientesComponent} from './pacientes/pages/inicio/inicio.component';
import { IniciarComunicacaoComponent } from './pacientes/pages/iniciar-comunicacao/iniciar-comunicacao.component';
import { EvolucaoComponent } from './pacientes/pages/evolucao/evolucao.component';
import { MeusAcessosComponent } from './pacientes/pages/meus-acessos/meus-acessos.component';
import { MeusDadosComponent as MeusDadosPacienteComponent } from './pacientes/pages/meus-dados/meus-dados.component';

import { InicioComponent as InicioParceirosComponent} from './parceiros/pages/inicio/inicio.component';
import { EditarPictogramasComponent } from './parceiros/pages/editar-pictogramas/editar-pictogramas.component';
import { MeusDadosComponent as MeusDadosParceirosComponent } from './parceiros/pages/meus-dados/meus-dados.component';


export const routes: Routes = [
  {
    path: "",
    component: InicioHomeComponent
  },
  {
    path: "home/pages/inicio",
    component: InicioHomeComponent
  },
  {
    path: "home/pages/aprender-caa",
    component: AprenderCaaComponent
  },
  {
    path: "home/pages/pictogramas",
    component: PictogramasComponent
  },
  {
    path: "home/pages/termos-de-utilizacao",
    component: TermosDeUtilizacaoComponent
  },
  {
    path: "home/pages/sobre-nos",
    component: SobreNosComponent
  },
  {
    path: "home/pages/fonoaudiologos",
    component: FonoaudiologosHomeComponent
  },
  {
    path: "home/pages/contacte-nos",
    component: ContacteNosComponent
  },
  {
    path: "home/pages/pagamentos",
    component: PagamentosHomeComponent
  },
  {
    path: "home/pages/entrevistas",
    component: EntrevistasHomeComponent
  },
  {
    path: "home/pages/sistema",
    component: SistemaComponent
  },
  {
    path: "home/pages/comunicacao",
    component: ComunicacaoComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cadastro/pages/inicio",
    component: InicioCadastroComponent
  },
  {
    path: "cadastro/pages/cadastro-fono",
    component: CadastroFonoComponent
  },
  {
    path: "cadastro/pages/cadastro-paciente",
    component: CadastroPacienteComponent
  },
  {
    path: "financeiro/pages/inicio",
    component: InicioFinanceiroComponent
  },
  {
    path: "financeiro/pages/pagamentos",
    component: PagamentosFinanceiroComponent
  },
  {
    path: "financeiro/pages/fonoaudiologos",
    component: FonoaudiologosFinanceiroComponent
  },
  {
    path: "financeiro/pages/pacientes",
    component: PacientesComponent
  },
  {
    path: "financeiro/pages/meus-dados",
    component: MeusDadosFinanceiroComponent
  },
  {
    path: "financeiro/pages/cadastrar-socios",
    component: CadastrarSociosComponent
  },
  {
    path: "fono/pages/inicio",
    component: InicioFonoComponent
  },
  {
    path: "fono/pages/gerenciar-pictogramas",
    component: GerenciarPictogramasComponent
  },
  {
    path: "fono/pages/cadastrar-parceiros",
    component: CadastrarParceirosComponent
  },
  {
    path: "fono/pages/editar-parceiros",
    component: EditarParceirosComponent
  },
  {
    path: "fono/pages/relatorios",
    component: RelatoriosComponent
  },
  {
    path: "fono/pages/meus-dados",
    component: MeusDadosFonoComponent
  },
  {
    path: "fono/pages/dados-de-pacientes",
    component: DadosDePacientesComponent
  },
  {
    path: "fono/pages/entrevistas",
    component: EntrevistasFonoComponent
  },
  {
    path: "pacientes/pages/inicio",
    component: InicioPacientesComponent
  },
  {
    path: "pacientes/pages/iniciar-comunicacao",
    component: IniciarComunicacaoComponent
  },
  {
    path: "pacientes/pages/evolucao",
    component: EvolucaoComponent
  },
  {
    path: "pacientes/pages/meus-acessos",
    component: MeusAcessosComponent
  },
  {
    path: "pacientes/pages/meus-dados",
    component: MeusDadosPacienteComponent
  },
  {
    path: "parceiros/pages/inicio",
    component: InicioParceirosComponent
  },
  {
    path: "parceiros/pages/editar-pictogramas",
    component: EditarPictogramasComponent
  },
  {
    path: "parceiros/pages/meus-dados",
    component: MeusDadosParceirosComponent
  },

];
