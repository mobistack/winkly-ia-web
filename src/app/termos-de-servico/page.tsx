import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Serviço | Winkly",
  description: "Termos de Serviço da Winkly - Leia nossos termos e condições de uso.",
};

const tableOfContents = [
  { id: "nossos-servicos", title: "1. Nossos Serviços" },
  { id: "propriedade-intelectual", title: "2. Direitos de Propriedade Intelectual" },
  { id: "representacoes-usuario", title: "3. Representações do Usuário" },
  { id: "compras-pagamento", title: "4. Compras e Pagamento" },
  { id: "periodo-teste", title: "5. Período de Teste Gratuito" },
  { id: "cancelamento", title: "6. Cancelamento" },
  { id: "software", title: "7. Software" },
  { id: "atividades-proibidas", title: "8. Atividades Proibidas" },
  { id: "contribuicoes-usuario", title: "9. Contribuições Geradas pelo Usuário" },
  { id: "licenca-contribuicao", title: "10. Licença de Contribuição" },
  { id: "licenca-aplicativo", title: "11. Licença do Aplicativo Móvel" },
  { id: "gestao-servicos", title: "12. Gestão dos Serviços" },
  { id: "politica-privacidade", title: "13. Política de Privacidade" },
  { id: "vigencia-rescisao", title: "14. Vigência e Rescisão" },
  { id: "modificacoes-interrupcoes", title: "15. Modificações e Interrupções" },
  { id: "lei-aplicavel", title: "16. Lei Aplicável" },
  { id: "resolucao-disputas", title: "17. Resolução de Disputas" },
  { id: "correcoes", title: "18. Correções" },
  { id: "isencao-garantias", title: "19. Isenção de Garantias" },
  { id: "limitacao-responsabilidade", title: "20. Limitação de Responsabilidade" },
  { id: "indenizacao", title: "21. Indenização" },
  { id: "dados-usuario", title: "22. Dados do Usuário" },
  { id: "comunicacoes-eletronicas", title: "23. Comunicações Eletrônicas" },
  { id: "consumidores-brasileiros", title: "24. Consumidores Brasileiros" },
  { id: "disposicoes-gerais", title: "25. Disposições Gerais" },
  { id: "isencao-responsabilidade", title: "26. Isenção de Responsabilidade" },
  { id: "coleta-dados-conversa", title: "27. Coleta e Uso de Dados de Conversação" },
  { id: "contato", title: "28. Contato" },
];

export default function TermosDeServico() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <header className="mb-12">
          <p className="mb-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Última atualização: 28 de janeiro de 2026
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-5xl">
            Termos de Serviço
          </h1>
        </header>

        <nav className="mb-16 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Índice
          </h2>
          <ul className="grid gap-2 text-sm md:grid-cols-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <article className="prose prose-zinc dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              Acordo com Nossos Termos Legais
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Nós da Winkly (&quot;nós&quot;, &quot;nosso&quot; ou &quot;nossa empresa&quot;), operamos o aplicativo móvel Winkly (o &quot;Aplicativo&quot;), bem como quaisquer outros produtos e serviços relacionados que fazem referência ou estão vinculados a estes termos legais (os &quot;Termos Legais&quot;) (coletivamente, os &quot;Serviços&quot;).
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você pode entrar em contato conosco pelo e-mail{" "}
              <a href="mailto:suporte@winklyia.com.br" className="text-zinc-900 underline dark:text-zinc-50">
                suporte@winklyia.com.br
              </a>.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estes Termos Legais constituem um acordo juridicamente vinculante celebrado entre você, seja pessoalmente ou em nome de uma entidade (&quot;você&quot;), e nós, referente ao seu acesso e uso dos Serviços. Você concorda que, ao acessar os Serviços, leu, compreendeu e concordou em estar vinculado a todos estes Termos Legais.
            </p>
            <p className="mt-4 font-medium leading-relaxed text-zinc-900 dark:text-zinc-50">
              SE VOCÊ NÃO CONCORDAR COM TODOS ESTES TERMOS LEGAIS, VOCÊ ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE DESCONTINUAR O USO IMEDIATAMENTE.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Termos e condições suplementares ou documentos que possam ser publicados nos Serviços de tempos em tempos são expressamente incorporados aqui por referência. Reservamo-nos o direito, a nosso exclusivo critério, de fazer alterações ou modificações nestes Termos Legais de tempos em tempos. Alertaremos você sobre quaisquer alterações atualizando a data de &quot;Última atualização&quot; destes Termos Legais, e você renuncia a qualquer direito de receber aviso específico de cada alteração.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Os Serviços são destinados a usuários com pelo menos 18 anos de idade. Pessoas com mais de 13 anos, mas menores de 18 anos, devem estar acompanhadas por um adulto, caso contrário não estão autorizadas a usar ou se registrar nos Serviços.
            </p>
          </section>

          <section id="nossos-servicos" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. Nossos Serviços
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seria contrário à lei ou regulamento, ou que nos sujeitaria a qualquer exigência de registro dentro de tal jurisdição ou país. Consequentemente, as pessoas que optarem por acessar os Serviços de outros locais o fazem por iniciativa própria e são exclusivamente responsáveis pelo cumprimento das leis locais, se e na medida em que as leis locais forem aplicáveis.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Os Serviços não são adaptados para cumprir regulamentos específicos do setor (como normas específicas da ANVISA, CVM, BACEN, etc.), portanto, se suas interações estiverem sujeitas a tais regulamentações, você não poderá usar os Serviços.
            </p>
          </section>

          <section id="propriedade-intelectual" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Direitos de Propriedade Intelectual
            </h2>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Nossa Propriedade Intelectual
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Somos proprietários ou licenciados de todos os direitos de propriedade intelectual em nossos Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidade, software, designs de sites, áudio, vídeo, texto, fotografias e gráficos nos Serviços (coletivamente, o &quot;Conteúdo&quot;), bem como as marcas comerciais, marcas de serviço e logotipos neles contidos (as &quot;Marcas&quot;).
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Nosso Conteúdo e Marcas são protegidos por leis de direitos autorais e marcas registradas (e várias outras leis de propriedade intelectual e concorrência desleal) e tratados no Brasil e em todo o mundo.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              O Conteúdo e as Marcas são fornecidos nos ou através dos Serviços &quot;COMO ESTÃO&quot; apenas para seu uso pessoal e não comercial.
            </p>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Seu Uso de Nossos Serviços
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Sujeito à sua conformidade com estes Termos Legais, incluindo a seção &quot;ATIVIDADES PROIBIDAS&quot; abaixo, concedemos a você uma licença não exclusiva, intransferível e revogável para:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>acessar os Serviços; e</li>
              <li>baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você obteve acesso adequadamente,</li>
            </ul>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              exclusivamente para seu uso pessoal e não comercial.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Exceto conforme estabelecido nesta seção ou em outra parte de nossos Termos Legais, nenhuma parte dos Serviços e nenhum Conteúdo ou Marcas podem ser copiados, reproduzidos, agregados, republicados, carregados, postados, exibidos publicamente, codificados, traduzidos, transmitidos, distribuídos, vendidos, licenciados ou de outra forma explorados para qualquer finalidade comercial, sem nossa permissão prévia por escrito.
            </p>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Suas Submissões
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ao nos enviar diretamente qualquer pergunta, comentário, sugestão, ideia, feedback ou outras informações sobre os Serviços (&quot;Submissões&quot;), você concorda em nos ceder todos os direitos de propriedade intelectual em tal Submissão. Você concorda que seremos proprietários desta Submissão e teremos direito ao seu uso e disseminação irrestritos para qualquer finalidade lícita, comercial ou não, sem reconhecimento ou compensação a você.
            </p>
          </section>

          <section id="representacoes-usuario" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. Representações do Usuário
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ao usar os Serviços, você representa e garante que: (1) você tem capacidade legal e concorda em cumprir estes Termos Legais; (2) você não é menor de idade na jurisdição em que reside; (3) você não acessará os Serviços por meios automatizados ou não humanos, seja por bot, script ou de outra forma; (4) você não usará os Serviços para qualquer finalidade ilegal ou não autorizada; e (5) seu uso dos Serviços não violará qualquer lei ou regulamento aplicável.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Se você fornecer qualquer informação que seja falsa, imprecisa, desatualizada ou incompleta, temos o direito de suspender ou encerrar sua conta e recusar qualquer uso atual ou futuro dos Serviços (ou qualquer parte deles).
            </p>
          </section>

          <section id="compras-pagamento" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. Compras e Pagamento
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Aceitamos as seguintes formas de pagamento:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Visa</li>
              <li>Mastercard</li>
              <li>American Express</li>
              <li>Discover</li>
            </ul>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você concorda em fornecer informações de compra e conta atuais, completas e precisas para todas as compras feitas através dos Serviços. Você concorda ainda em atualizar prontamente as informações de conta e pagamento, incluindo endereço de e-mail, método de pagamento e data de validade do cartão de pagamento, para que possamos concluir suas transações e contatá-lo conforme necessário.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você concorda em pagar todas as cobranças aos preços então em vigor para suas compras e quaisquer taxas de envio aplicáveis, e nos autoriza a cobrar de seu provedor de pagamento escolhido quaisquer valores ao fazer seu pedido. Se seu pedido estiver sujeito a cobranças recorrentes, você consente em cobrarmos seu método de pagamento de forma recorrente sem exigir sua aprovação prévia para cada cobrança recorrente, até que você cancele o pedido aplicável.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Reservamo-nos o direito de recusar qualquer pedido feito através dos Serviços. Podemos, a nosso exclusivo critério, limitar ou cancelar quantidades compradas por pessoa, por domicílio ou por pedido.
            </p>
          </section>

          <section id="periodo-teste" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              5. Período de Teste Gratuito
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Podemos oferecer um período de teste gratuito para aqueles que se registrarem nos Serviços. A conta será cobrada de acordo com a assinatura escolhida pelo usuário ao final do período de teste gratuito.
            </p>
          </section>

          <section id="cancelamento" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              6. Cancelamento
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Todas as compras não são reembolsáveis. Para cancelar sua assinatura:
            </p>
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Abra o aplicativo da App Store.</li>
              <li>Clique no seu nome. Se não encontrar seu nome, clique em Entrar.</li>
              <li>Clique em Configurações da Conta.</li>
              <li>Role até Assinaturas e clique em Gerenciar.</li>
              <li>Ao lado da assinatura, clique em Editar.</li>
              <li>Clique em Cancelar Assinatura.</li>
            </ol>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Seu cancelamento entrará em vigor no final do período pago atual. Se você estiver insatisfeito com nossos Serviços, entre em contato conosco pelo e-mail{" "}
              <a href="mailto:suporte@winklyia.com.br" className="text-zinc-900 underline dark:text-zinc-50">
                suporte@winklyia.com.br
              </a>.
            </p>
          </section>

          <section id="software" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              7. Software
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Podemos incluir software para uso em conexão com nossos Serviços. Se tal software for acompanhado por um contrato de licença de usuário final (&quot;EULA&quot;), os termos do EULA regerão seu uso do software. Se tal software não for acompanhado por um EULA, então concedemos a você uma licença não exclusiva, revogável, pessoal e intransferível para usar tal software exclusivamente em conexão com nossos serviços e de acordo com estes Termos Legais.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Qualquer software e qualquer documentação relacionada é fornecido &quot;COMO ESTÁ&quot; sem garantia de qualquer tipo, expressa ou implícita, incluindo, sem limitação, as garantias implícitas de comercialização, adequação a uma finalidade específica ou não violação.
            </p>
          </section>

          <section id="atividades-proibidas" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              8. Atividades Proibidas
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você não pode acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual disponibilizamos os Serviços. Os Serviços não podem ser usados em conexão com quaisquer empreendimentos comerciais, exceto aqueles que são especificamente endossados ou aprovados por nós.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Como usuário dos Serviços, você concorda em não:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>Recuperar sistematicamente dados ou outro conteúdo dos Serviços para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem permissão por escrito nossa.</li>
              <li>Enganar, fraudar ou induzir em erro a nós e outros usuários, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuário.</li>
              <li>Contornar, desabilitar ou interferir de outra forma com recursos relacionados à segurança dos Serviços.</li>
              <li>Depreciar, manchar ou prejudicar de outra forma, em nossa opinião, nós e/ou os Serviços.</li>
              <li>Usar qualquer informação obtida dos Serviços para assediar, abusar ou prejudicar outra pessoa.</li>
              <li>Fazer uso impróprio de nossos serviços de suporte ou enviar relatórios falsos de abuso ou má conduta.</li>
              <li>Usar os Serviços de maneira inconsistente com quaisquer leis ou regulamentos aplicáveis.</li>
              <li>Carregar ou transmitir vírus, cavalos de Troia ou outro material que interfira no uso ininterrupto dos Serviços.</li>
              <li>Envolver-se em qualquer uso automatizado do sistema, como usar scripts para enviar comentários ou mensagens.</li>
              <li>Excluir o aviso de direitos autorais ou outros direitos de propriedade de qualquer Conteúdo.</li>
              <li>Tentar se passar por outro usuário ou pessoa ou usar o nome de usuário de outro usuário.</li>
              <li>Interferir, interromper ou criar um ônus indevido nos Serviços ou nas redes conectadas aos Serviços.</li>
              <li>Assediar, irritar, intimidar ou ameaçar qualquer um de nossos funcionários ou agentes.</li>
              <li>Copiar ou adaptar o software dos Serviços, incluindo, mas não limitado a Flash, PHP, HTML, JavaScript ou outro código.</li>
              <li>Usar os Serviços como parte de qualquer esforço para competir conosco ou de outra forma usar os Serviços para qualquer empreendimento gerador de receita ou empresa comercial.</li>
            </ul>
          </section>

          <section id="contribuicoes-usuario" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              9. Contribuições Geradas pelo Usuário
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Os Serviços não oferecem aos usuários a possibilidade de enviar ou postar conteúdo. Podemos fornecer a você a oportunidade de criar, enviar, postar, exibir, transmitir, executar, publicar, distribuir ou transmitir conteúdo e materiais para nós ou nos Serviços, incluindo, mas não limitado a, texto, escritos, vídeo, áudio, fotografias, gráficos, comentários, sugestões ou informações pessoais ou outro material (coletivamente, &quot;Contribuições&quot;).
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ao criar ou disponibilizar quaisquer Contribuições, você representa e garante que:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
              <li>A criação, distribuição, transmissão, exibição pública e acesso às suas Contribuições não infringem direitos de propriedade de terceiros.</li>
              <li>Você é o criador e proprietário ou possui as licenças, direitos, consentimentos e permissões necessários.</li>
              <li>Suas Contribuições não são falsas, imprecisas ou enganosas.</li>
              <li>Suas Contribuições não são publicidade não solicitada, materiais promocionais, esquemas de pirâmide ou spam.</li>
              <li>Suas Contribuições não são obscenas, lascivas, violentas, assediadoras ou de outra forma questionáveis.</li>
              <li>Suas Contribuições não ridicularizam, zombam, depreciam, intimidam ou abusam de ninguém.</li>
              <li>Suas Contribuições não violam nenhuma lei, regulamento ou regra aplicável.</li>
            </ul>
          </section>

          <section id="licenca-contribuicao" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              10. Licença de Contribuição
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você e os Serviços concordam que podemos acessar, armazenar, processar e usar quaisquer informações e dados pessoais que você fornecer seguindo os termos da Política de Privacidade e suas escolhas (incluindo configurações).
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Ao enviar sugestões ou outro feedback sobre os Serviços, você concorda que podemos usar e compartilhar tal feedback para qualquer finalidade sem compensação a você.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Não reivindicamos propriedade sobre suas Contribuições. Você mantém total propriedade de todas as suas Contribuições e quaisquer direitos de propriedade intelectual ou outros direitos de propriedade associados às suas Contribuições.
            </p>
          </section>

          <section id="licenca-aplicativo" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              11. Licença do Aplicativo Móvel
            </h2>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Licença de Uso
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Se você acessar os Serviços através do Aplicativo, concedemos a você um direito revogável, não exclusivo, intransferível e limitado para instalar e usar o Aplicativo em dispositivos eletrônicos sem fio de sua propriedade ou controlados por você, e para acessar e usar o Aplicativo em tais dispositivos estritamente de acordo com os termos e condições desta licença de aplicativo móvel contida nestes Termos Legais.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você não deve: (1) descompilar, fazer engenharia reversa, desmontar, tentar derivar o código-fonte ou descriptografar o Aplicativo; (2) fazer qualquer modificação, adaptação, melhoria, aprimoramento, tradução ou trabalho derivado do Aplicativo; (3) violar quaisquer leis, regras ou regulamentos aplicáveis em conexão com seu acesso ou uso do Aplicativo; (4) remover, alterar ou obscurecer qualquer aviso de propriedade; (5) usar o Aplicativo para qualquer empreendimento gerador de receita.
            </p>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Dispositivos Apple e Android
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Os seguintes termos se aplicam quando você usa o Aplicativo obtido da Apple Store ou Google Play: a licença concedida a você para nosso Aplicativo é limitada a uma licença intransferível para usar o aplicativo em um dispositivo que utiliza os sistemas operacionais Apple iOS ou Android, conforme aplicável, e de acordo com as regras de uso estabelecidas nos termos de serviço do Distribuidor de Aplicativos aplicável.
            </p>
          </section>

          <section id="gestao-servicos" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              12. Gestão dos Serviços
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Reservamo-nos o direito, mas não a obrigação, de: (1) monitorar os Serviços quanto a violações destes Termos Legais; (2) tomar ação legal apropriada contra qualquer pessoa que, a nosso exclusivo critério, viole a lei ou estes Termos Legais; (3) a nosso exclusivo critério e sem limitação, recusar, restringir acesso, limitar a disponibilidade ou desabilitar suas Contribuições ou qualquer parte delas; (4) a nosso exclusivo critério e sem limitação, aviso ou responsabilidade, remover dos Serviços ou desabilitar todos os arquivos e conteúdo que sejam excessivos em tamanho ou de qualquer forma onerosos para nossos sistemas; e (5) gerenciar os Serviços de maneira projetada para proteger nossos direitos e propriedade e facilitar o funcionamento adequado dos Serviços.
            </p>
          </section>

          <section id="politica-privacidade" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              13. Política de Privacidade
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Nos preocupamos com a privacidade e segurança dos dados. Por favor, revise nossa Política de Privacidade. Ao usar os Serviços, você concorda em estar vinculado à nossa Política de Privacidade, que está incorporada a estes Termos Legais.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Por favor, esteja ciente de que os Serviços estão hospedados no Brasil. Se você acessar os Serviços de qualquer outra região do mundo com leis ou outros requisitos que regem a coleta, uso ou divulgação de dados pessoais que diferem das leis aplicáveis no Brasil, então, através do seu uso contínuo dos Serviços, você está transferindo seus dados para o Brasil e consente expressamente em ter seus dados transferidos e processados no Brasil, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </section>

          <section id="vigencia-rescisao" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              14. Vigência e Rescisão
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estes Termos Legais permanecerão em pleno vigor e efeito enquanto você usar os Serviços. SEM LIMITAR QUALQUER OUTRA DISPOSIÇÃO DESTES TERMOS LEGAIS, RESERVAMO-NOS O DIREITO DE, A NOSSO EXCLUSIVO CRITÉRIO E SEM AVISO OU RESPONSABILIDADE, NEGAR ACESSO E USO DOS SERVIÇOS A QUALQUER PESSOA POR QUALQUER MOTIVO OU SEM MOTIVO, INCLUINDO SEM LIMITAÇÃO POR VIOLAÇÃO DE QUALQUER REPRESENTAÇÃO, GARANTIA OU ACORDO CONTIDO NESTES TERMOS LEGAIS OU DE QUALQUER LEI OU REGULAMENTO APLICÁVEL.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Se encerrarmos ou suspendermos sua conta por qualquer motivo, você está proibido de se registrar e criar uma nova conta sob seu nome, um nome falso ou emprestado, ou o nome de qualquer terceiro. Além de encerrar ou suspender sua conta, reservamo-nos o direito de tomar ação legal apropriada.
            </p>
          </section>

          <section id="modificacoes-interrupcoes" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              15. Modificações e Interrupções
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Reservamo-nos o direito de alterar, modificar ou remover o conteúdo dos Serviços a qualquer momento ou por qualquer motivo a nosso exclusivo critério sem aviso. No entanto, não temos obrigação de atualizar qualquer informação em nossos Serviços. Não seremos responsáveis perante você ou qualquer terceiro por qualquer modificação, alteração de preço, suspensão ou descontinuação dos Serviços.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Não podemos garantir que os Serviços estarão disponíveis em todos os momentos. Podemos experimentar problemas de hardware, software ou outros, ou precisar realizar manutenção relacionada aos Serviços, resultando em interrupções, atrasos ou erros. Você concorda que não temos nenhuma responsabilidade por qualquer perda, dano ou inconveniência causado pela sua incapacidade de acessar ou usar os Serviços durante qualquer período de inatividade ou descontinuação dos Serviços.
            </p>
          </section>

          <section id="lei-aplicavel" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              16. Lei Aplicável
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estes Termos Legais e seu uso dos Serviços são regidos e interpretados de acordo com as leis da República Federativa do Brasil, incluindo o Código de Defesa do Consumidor (Lei nº 8.078/1990), o Marco Civil da Internet (Lei nº 12.965/2014) e a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
          </section>

          <section id="resolucao-disputas" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              17. Resolução de Disputas
            </h2>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Negociação e Mediação
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Se as Partes não conseguirem resolver uma Disputa através de negociações informais, as Partes concordam em tentar resolver a disputa através de mediação antes de recorrer ao Poder Judiciário, conforme previsto na Lei de Mediação (Lei nº 13.140/2015).
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Caso a mediação não seja bem-sucedida, qualquer disputa será submetida à jurisdição exclusiva dos tribunais brasileiros, ficando eleito o foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias decorrentes destes Termos Legais.
            </p>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Direitos do Consumidor
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Nada nestes Termos Legais limitará seus direitos como consumidor previstos no Código de Defesa do Consumidor (Lei nº 8.078/1990). Você pode registrar reclamações junto aos órgãos de defesa do consumidor, como o PROCON, ou através da plataforma consumidor.gov.br.
            </p>
            <h3 className="mt-6 text-lg font-medium text-zinc-800 dark:text-zinc-200">
              Arbitragem Opcional
            </h3>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              As Partes podem, de comum acordo, optar pela arbitragem para resolução de disputas, que será conduzida de acordo com a Lei de Arbitragem (Lei nº 9.307/1996) e as regras de uma câmara de arbitragem reconhecida no Brasil.
            </p>
          </section>

          <section id="correcoes" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              18. Correções
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Pode haver informações nos Serviços que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e várias outras informações. Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões e de alterar ou atualizar as informações nos Serviços a qualquer momento, sem aviso prévio.
            </p>
          </section>

          <section id="isencao-garantias" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              19. Isenção de Garantias
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              OS SERVIÇOS SÃO FORNECIDOS &quot;COMO ESTÃO&quot; E &quot;CONFORME DISPONÍVEL&quot;. VOCÊ CONCORDA QUE SEU USO DOS SERVIÇOS SERÁ POR SUA CONTA E RISCO. NA EXTENSÃO MÁXIMA PERMITIDA POR LEI, RENUNCIAMOS A TODAS AS GARANTIAS, EXPRESSAS OU IMPLÍCITAS, EM CONEXÃO COM OS SERVIÇOS E SEU USO DELES, INCLUINDO, SEM LIMITAÇÃO, AS GARANTIAS IMPLÍCITAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO A UMA FINALIDADE ESPECÍFICA E NÃO VIOLAÇÃO.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              NÃO FAZEMOS GARANTIAS OU REPRESENTAÇÕES SOBRE A PRECISÃO OU COMPLETUDE DO CONTEÚDO DOS SERVIÇOS OU O CONTEÚDO DE QUAISQUER SITES OU APLICATIVOS MÓVEIS VINCULADOS AOS SERVIÇOS E NÃO ASSUMIREMOS NENHUMA RESPONSABILIDADE POR QUAISQUER (1) ERROS, ENGANOS OU IMPRECISÕES DE CONTEÚDO E MATERIAIS, (2) LESÃO PESSOAL OU DANO À PROPRIEDADE, DE QUALQUER NATUREZA, RESULTANTE DE SEU ACESSO E USO DOS SERVIÇOS, (3) QUALQUER ACESSO NÃO AUTORIZADO OU USO DE NOSSOS SERVIDORES SEGUROS E/OU QUALQUER INFORMAÇÃO PESSOAL E/OU FINANCEIRA ARMAZENADA NELES.
            </p>
          </section>

          <section id="limitacao-responsabilidade" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              20. Limitação de Responsabilidade
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              EM NENHUMA HIPÓTESE NÓS OU NOSSOS DIRETORES, FUNCIONÁRIOS OU AGENTES SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU QUALQUER TERCEIRO POR QUAISQUER DANOS DIRETOS, INDIRETOS, CONSEQUENCIAIS, EXEMPLARES, INCIDENTAIS, ESPECIAIS OU PUNITIVOS, INCLUINDO LUCROS CESSANTES, RECEITA PERDIDA, PERDA DE DADOS OU OUTROS DANOS DECORRENTES DE SEU USO DOS SERVIÇOS, MESMO QUE TENHAMOS SIDO AVISADOS DA POSSIBILIDADE DE TAIS DANOS.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              NÃO OBSTANTE QUALQUER COISA EM CONTRÁRIO CONTIDA AQUI, NOSSA RESPONSABILIDADE PERANTE VOCÊ POR QUALQUER CAUSA E INDEPENDENTEMENTE DA FORMA DA AÇÃO, SERÁ SEMPRE LIMITADA AO VALOR PAGO, SE HOUVER, POR VOCÊ A NÓS DURANTE O PERÍODO DE SEIS (6) MESES ANTERIOR A QUALQUER CAUSA DE AÇÃO SURGIR.
            </p>
          </section>

          <section id="indenizacao" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              21. Indenização
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você concorda em defender, indenizar e nos isentar de responsabilidade, incluindo nossas subsidiárias, afiliadas e todos os nossos respectivos diretores, agentes, parceiros e funcionários, de e contra qualquer perda, dano, responsabilidade, reclamação ou demanda, incluindo honorários advocatícios razoáveis e despesas, feitos por qualquer terceiro devido a ou decorrente de: (1) uso dos Serviços; (2) violação destes Termos Legais; (3) qualquer violação de suas representações e garantias estabelecidas nestes Termos Legais; (4) sua violação dos direitos de um terceiro, incluindo, mas não limitado a, direitos de propriedade intelectual; ou (5) qualquer ato abertamente prejudicial em relação a qualquer outro usuário dos Serviços com quem você se conectou através dos Serviços.
            </p>
          </section>

          <section id="dados-usuario" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              22. Dados do Usuário
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Manteremos certos dados que você transmite aos Serviços para fins de gerenciamento do desempenho dos Serviços, bem como dados relativos ao seu uso dos Serviços. Embora realizemos backups de dados de rotina regulares, você é o único responsável por todos os dados que transmite ou que se relacionam com qualquer atividade que você realizou usando os Serviços.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você concorda que não teremos nenhuma responsabilidade perante você por qualquer perda ou corrupção de tais dados, e você renuncia a qualquer direito de ação contra nós decorrente de qualquer perda ou corrupção de tais dados.
            </p>
          </section>

          <section id="comunicacoes-eletronicas" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              23. Comunicações Eletrônicas, Transações e Assinaturas
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Visitar os Serviços, enviar-nos e-mails e preencher formulários online constituem comunicações eletrônicas. Você consente em receber comunicações eletrônicas e concorda que todos os acordos, avisos, divulgações e outras comunicações que fornecemos eletronicamente, por e-mail e nos Serviços, satisfazem qualquer exigência legal de que tal comunicação seja por escrito.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              VOCÊ CONCORDA COM O USO DE ASSINATURAS ELETRÔNICAS, CONTRATOS, PEDIDOS E OUTROS REGISTROS, E COM A ENTREGA ELETRÔNICA DE AVISOS, POLÍTICAS E REGISTROS DE TRANSAÇÕES INICIADAS OU CONCLUÍDAS POR NÓS OU ATRAVÉS DOS SERVIÇOS.
            </p>
          </section>

          <section id="consumidores-brasileiros" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              24. Consumidores Brasileiros
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Se qualquer reclamação conosco não for satisfatoriamente resolvida, você pode entrar em contato com os órgãos de defesa do consumidor do seu estado ou município (PROCON), ou registrar sua reclamação através da plataforma oficial do Governo Federal:{" "}
              <a href="https://www.consumidor.gov.br" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline dark:text-zinc-50">
                consumidor.gov.br
              </a>.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Você também pode exercer seus direitos previstos na Lei Geral de Proteção de Dados (LGPD) entrando em contato com nosso Encarregado de Proteção de Dados (DPO) através do e-mail{" "}
              <a href="mailto:privacidade@winklyia.com.br" className="text-zinc-900 underline dark:text-zinc-50">
                suporte@winklyia.com.br
              </a>.
            </p>
          </section>

          <section id="disposicoes-gerais" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              25. Disposições Gerais
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estes Termos Legais e quaisquer políticas ou regras operacionais publicadas por nós nos Serviços ou em relação aos Serviços constituem o acordo completo e entendimento entre você e nós. Nossa falha em exercer ou fazer cumprir qualquer direito ou disposição destes Termos Legais não operará como uma renúncia de tal direito ou disposição.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Estes Termos Legais operam na extensão máxima permitida por lei. Podemos ceder quaisquer ou todos os nossos direitos e obrigações a outros a qualquer momento. Não seremos responsáveis por qualquer perda, dano, atraso ou falha em agir causada por qualquer causa além de nosso controle razoável.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Se qualquer disposição ou parte de uma disposição destes Termos Legais for determinada como ilegal, nula ou inexequível, essa disposição ou parte da disposição é considerada separável destes Termos Legais e não afeta a validade e exequibilidade de quaisquer disposições restantes.
            </p>
          </section>

          <section id="isencao-responsabilidade" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              26. Isenção de Responsabilidade
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Todos os aplicativos produzidos por nós são fornecidos estritamente apenas para fins de entretenimento. Embora nos esforcemos para fornecer uma experiência envolvente e instigante, os conselhos e informações oferecidos por nossos produtos são gerados através de inteligência artificial, o que significa que podem não ser precisos, apropriados ou relevantes para todos os indivíduos ou situações.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Por favor, esteja ciente de que o conteúdo gerado por nossos aplicativos não deve ser considerado para decisões pessoais, médicas, legais ou financeiras. Você deve consultar um profissional apropriado para obter aconselhamento específico adaptado à sua situação. Não aceitamos qualquer responsabilidade por quaisquer ações tomadas ou não tomadas com base em informações fornecidas por nossos produtos.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              O uso de nossos produtos e qualquer confiança em sua saída é por sua conta e risco. Renunciamos expressamente a qualquer responsabilidade, seja direta ou indireta, decorrente de seu uso de nossos produtos. Ao usar nossos produtos, você reconhece e concorda com esta isenção de responsabilidade.
            </p>
          </section>

          <section id="coleta-dados-conversa" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              27. Coleta e Uso de Dados de Conversação
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Em nossos esforços contínuos para melhorar o aplicativo e fornecer uma experiência de usuário superior, podemos coletar e analisar dados de conversas conduzidas dentro do aplicativo.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Os dados de conversação coletados serão usados exclusivamente para fins de melhoria das funcionalidades do aplicativo, como aprimorar a interação do usuário, refinar nossos algoritmos de IA e desenvolver novos recursos que beneficiem nossos usuários.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Garantimos que o uso dos dados de conversação é conduzido com o máximo respeito pela privacidade e confidencialidade do usuário. Medidas estão em vigor para garantir que a análise de dados respeite a privacidade e integridade das conversas de nossos usuários.
            </p>
          </section>

          <section id="contato" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              28. Contato
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
              Para resolver uma reclamação sobre os Serviços ou receber mais informações sobre o uso dos Serviços, entre em contato conosco em:
            </p>
            <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <p className="font-medium text-zinc-900 dark:text-zinc-50">Winkly</p>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                <a href="mailto:suporte@winklyia.com.br" className="underline">
                  suporte@winklyia.com.br
                </a>
              </p>
            </div>
          </section>
        </article>

        <footer className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Tem alguma dúvida? Entre em contato conosco pelo{" "}
            <a href="mailto:suporte@winklyia.com.br" className="text-zinc-900 underline dark:text-zinc-50">
              suporte@winklyia.com.br
            </a>.
          </p>
        </footer>
      </main>
    </div>
  );
}
