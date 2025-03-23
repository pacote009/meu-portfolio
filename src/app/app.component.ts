import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container" [ngClass]="{ 'dark-mode': isDarkMode }">
      <button class="btn-toggle" (click)="toggleDarkMode()">{{ isDarkMode ? '☀️' : '🌙' }}</button>
      <header>
  <div class="hero">
    <div class="d-flex align-items-center container-header">
      <img src="assets/foto-perfil.jpg" alt="Vitor de Mello Leite" class="profile-photo">
      <div>
        <h1>Vitor de Mello Leite</h1>
        <p>Analista de Sistemas | Segurança da Informação | Desenvolvimento de Software</p>
      </div>
    </div>

    <!-- Botões Experiência e Tecnologia -->
    <div class="header-buttons">
      <button class="btn btn-header" data-bs-toggle="modal" data-bs-target="#experienceModal">Experiência</button>
      <button class="btn btn-header" data-bs-toggle="modal" data-bs-target="#technologyModal">Tecnologias</button>
    </div>
  </div>
     </header>

      <section class="icons">
        <div class="icon"><img src="assets/code-icon.png" alt="Desenvolvimento" /><p>Criação de aplicações modernas e responsivas, utilizando tecnologias como Angular e ASP.NET Core.</p></div>
        <div class="icon"><img src="assets/security-icon.png" alt="Segurança" /><p>Implementação de medidas para proteger sistemas e redes contra ameaças.</p></div>
        <div class="icon"><img src="assets/system-icon.png" alt="Análise de Sistemas" /><p>Projetar e otimizar sistemas para melhorar eficiência e segurança.</p></div>
      </section>

      <section class="about">
        <button class="btn btn-custom" data-bs-toggle="modal" data-bs-target="#aboutModal">Sobre</button>
      </section>

      <section class="projects">
  <div class="social-links">
    <h2>Conecte-se comigo</h2>
    <a href="https://www.linkedin.com/in/vitor-mello-73884224a/" target="_blank" class="social-btn linkedin">LinkedIn</a>
    <a href="https://github.com/pacote009" target="_blank" class="social-btn github">GitHub</a>
  </div>
</section>
      <!-- Modal Sobre -->
      <div class="modal fade" id="aboutModal" tabindex="-1" aria-labelledby="aboutModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content modal-dark">
            <div class="modal-header">
              <h5 class="modal-title" id="aboutModalLabel">Sobre Mim</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Sou um profissional de TI com sólida experiência em Análise de Sistemas, Segurança da Informação e Desenvolvimento Web. Minha trajetória inclui o desenvolvimento de soluções robustas e seguras, administração de redes e implementação de políticas de segurança para proteção de dados sensíveis.</p>
              <p>No desenvolvimento, tenho forte domínio em Angular, ASP.NET Core, Python, PHP e JavaScript, trabalhando na construção de aplicações escaláveis e responsivas. Tenho experiência com bancos de dados SQL Server, MySQL e PostgreSQL, garantindo eficiência e segurança na manipulação de dados.</p>
              <p>Na área de segurança da informação, atuo na gestão de firewalls (PFSense, Fortinet), prevenção contra ataques cibernéticos (SIEM, IDS/IPS), VPNs e auditorias de segurança. Possuo conhecimento aprofundado sobre LGPD, ISO 27001 e boas práticas de proteção de dados.</p>
              <p>Também tenho experiência em infraestrutura de TI, com domínio em virtualização, redes (TCP/IP, VLAN, roteamento) e computação em nuvem (AWS, Azure). Trabalho na automação de processos e implementação de soluções que otimizam a eficiência operacional.</p>
              <p>Busco constantemente aprimorar minhas habilidades e estou sempre atualizado com as novas tendências tecnológicas para oferecer soluções inovadoras e seguras.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal Experiência Atualizado -->
      <div class="modal fade modal-experience-dark" id="experienceModal" tabindex="-1" aria-labelledby="experienceModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="experienceModalLabel">📌 Experiência Profissional</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- Card 1 -->
              <div class="exp-card">
                <div class="empresa-header">
                  <h3>Centro Educacional Betel</h3>
                  <span class="destaque">2024 - Atual</span>
                </div>
                <p class="cargo">Técnico em Informática</p>
                <ul class="realizacoes">
                No Centro Educacional Betel, atuo como Técnico em Informática / Analista de Sistemas, gerenciando redes e reduzindo em 50% os problemas de conectividade dos laboratórios.
                Sou responsável pela administração e configuração de equipamentos de rede, como switches, roteadores e firewalls, além da implementação e monitoramento de políticas de segurança da informação alinhadas à ISO 27000 e LGPD.
                Também automatizo processos de manutenção com scripts Bash e Ansible, reduzindo o tempo de manutenção em até 30%, e administro o banco de dados PostgreSQL, garantindo alta performance.
                </ul>
                <div class="tags">
                  <span>Redes</span>
                  <span>Firewall</span>
                  <span>Linux</span>
                  <span>SQL</span>
                  <span>LGPD</span>
                </div>
              </div>
             <!-- Card 2 -->
              <div class="exp-card">
                <div class="empresa-header">
                  <h3>Ernst & Young</h3>
                  <span class="destaque">2021 - 2022</span>
                </div>
                <p class="cargo">Trainee Tech Risk</p>
                <ul class="realizacoes">
                Na Ernst & Young (EY), atuei como Trainee em Tech Risk, analisando e otimizando fluxos de trabalho para identificar oportunidades de melhoria.
                Trabalhei na implementação de frameworks de governança de TI, como ITIL e COBIT, garantindo conformidade e eficiência operacional.
                Além disso, contribuí para a adequação dos processos de TI à LGPD e ISO 27000, assegurando a proteção e conformidade dos dados da empresa.
                </ul>
                <div class="tags">
                  <span>SIEM</span>
                  <span>IDS/IPS</span>
                  <span>Compliance</span>
                  <span>LGDP</span>
                  <span>ISO27001
                  </span>
                </div>
              </div>
              <div class="exp-card">
                <div class="empresa-header">
                  <h3>Ricatel Tech Light</h3>
                  <span class="destaque">2019 - 2021</span>
                </div>
                <p class="cargo">Analista de TI</p>
                <ul class="realizacoes">
                  Na TechLight - Ricatel, atuei como Técnico em Informática, focando na segurança e eficiência dos sistemas de comunicação da empresa.
                  Implementei firewalls e estratégias de monitoramento ativo, reduzindo falhas de segurança no PABX em 40%. Gerenciei e configurei sistemas de telefonia PABX e PABX IP, garantindo uma comunicação mais eficiente.
                  Além disso, otimizei o atendimento técnico, aumentando a eficiência na resolução de chamados em 30%.
                  Meu trabalho envolveu suporte técnico em redes, administração de infraestrutura e implementação de medidas para aprimorar a segurança dos sistemas.
                </ul>
                <div class="tags">
                  <span>Linux</span>
                  <span>Firewall</span>
                  <span>Otimização</span>
                  <span>Redes</span>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            </div>
          </div>
        </div>
      </div>


      <!-- Modal Tecnologia -->
      <div class="modal fade" id="technologyModal" tabindex="-1" aria-labelledby="technologyModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content modal-dark">
      <div class="modal-header">
        <h5 class="modal-title" id="technologyModalLabel">🛠️ Minhas Tecnologias</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <!-- Coluna 1 - Segurança -->
          <div class="col-md-4 security-column">
            <h5><i class="fas fa-shield-alt me-2"></i>Segurança & Cibersegurança</h5>
            <ul class="tech-list">
              <li>SIEM (QRadar, Splunk)</li>
              <li>IDS/IPS (Suricata, Snort)</li>
              <li>Firewalls (PFSense, Fortinet)</li>
              <li>LGPD/GDPR Compliance</li>
              <li>Pentest Tools (Metasploit, Nmap)</li>
              <li>Gestão de Vulnerabilidades</li>
            </ul>
          </div>

          <!-- Coluna 2 - Desenvolvimento -->
          <div class="col-md-4 development-column">
            <h5><i class="fas fa-code me-2"></i>Desenvolvimento & Programação</h5>
            <ul class="tech-list">
              <li>Angular</li>
              <li>ASP.NET Core</li>
              <li>Python</li>
              <li>JavaScript/TypeScript</li>
              <li>SQL (SQL Server, MySQL)</li>
              <li>APIs REST</li>
            </ul>
          </div>

          <!-- Coluna 3 - Infraestrutura -->
          <div class="col-md-4 infra-column">
            <h5><i class="fas fa-server me-2"></i>Infraestrutura & Redes</h5>
            <ul class="tech-list">
              <li>VMware/Hyper-V</li>
              <li>Docker</li>
              <li>AWS/Azure</li>
              <li>TCP/IP, VLANs</li>
              <li>Windows/Linux Server</li>
              <li>Monitoramento (Zabbix)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>

  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
      .container {
        font-family: 'Roboto', sans-serif;
        text-align: center;
        max-width: 90%;
        margin: 0 auto;
        padding: 20px;
        transition: background 0.3s, color 0.3s;
      }
      .dark-mode {
        background: #121212;
        color: white;
      }
      .dark-mode .icon img {
        filter: invert(1);
        background: transparent;
      }
      .modal-dark {
        background-color: #1e1e1e !important;
        color: white;
        border: 1px solid #444;
      }
      .modal-header, .modal-footer {
        background-color: #2a2a2a;
        border-bottom: 1px solid #444;
        border-top: 1px solid #444;
      }
      .btn-close {
        filter: invert(1);
      }
      .btn-toggle {
        position: fixed;
        top: 10px;
        left: 10px;
        background: transparent;
        border: none;
        font-size: 20px;
        cursor: pointer;
      }
      .hero {
        background: black;
        color: white;
        padding: 50px 20px;
        text-align: center;
        position: relative; /* Adicionado */
      min-height: 250px; /* Ajuste conforme necessário */
      position: relative;
      }
      .header-buttons {
      position: absolute;
      bottom: 20px;
      right: 20px;
      display: flex;
      gap: 30px;
      padding: 0 15px; /* Adicionei padding horizontal */
      }
    .btn-header {
      background: rgba(255,255,255,0.1) !important;
      color: white !important;
      border: 2px solid rgba(255,255,255,0.3) !important;
      padding: 10px 35px;
      min-width: 140px; /* Largura mínima para consistência */
      border-radius: 30px;
      transition: all 0.3s ease;
      backdrop-filter: blur(5px);
    }
    .btn-header:hover {
      background: rgba(255,255,255,0.2) !important;
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }
    .about {
      margin-top: 20px; /* Espaço abaixo dos ícones */
    }
      .container-header {
      max-width: 1200px;
      margin: 0 auto;
      gap: 40px;
    }
    .profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top; /* Adicione esta linha */
  border: 3px solid #fff;
  box-shadow: 0 0 15px rgba(255,255,255,0.3);
  margin-top: 20px; /* Ajuste este valor conforme necessário */
}

      .icons {
        display: inline-block;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin: 20px 0;
      }
      .icon img {
        width: 40px;
        height: 40px;
      }
      .social-links {
        margin-top: 30px;
      }
      .social-btn {
        display: inline-block;
        margin: 10px;
        padding: 10px 20px;
        font-size: 16px;
        text-decoration: none;
        color: white;
        border-radius: 5px;
      }
      .linkedin { background-color: #0073b1; }
      .github { background-color: #808080; }
      .btn-custom {
        background-color: black !important;
        color: white;
      }

      /* Estilos para o modal de tecnologias */
    .tech-list {
      list-style: none;
      padding-left: 0;
      margin-top: 1rem;
    }

    .tech-list li {
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }

    .security-column h5 { color: #4CAF50; }
    .development-column h5 { color: #2196F3; }
    .infra-column h5 { color: #FF9800; }

    .modal-dark .tech-list li {
      border-color: rgba(255,255,255,0.1);
    }

    .tech-list li:last-child {
      border-bottom: none;
    }

    /* Divisor entre colunas */
    @media (min-width: 768px) {
      .security-column, .development-column {
        border-right: 1px solid rgba(255,255,255,0.1);
      }
      .hero {
    padding: 30px 10px !important;
    min-height: auto !important;
  }


  .header-buttons {
    position: static !important;
    justify-content: center;
    margin-top: 20px;
    gap: 15px !important;
  }

      .container-header {
    flex-direction: column !important;
    gap: 20px !important;
    text-align: center;
  }
  .profile-photo {
    width: 120px !important;
    height: 200px !important;
    margin: 0 auto !important;
  }
      .about {
        top: 10px;
        right: 10px;
      }
      .btn-header {
    padding: 8px 20px !important;
    min-width: auto !important;
    font-size: 14px !important;
  }
    }

    /* Ícones */
    h5 i {
      font-size: 1.2em;
      vertical-align: middle;
    }


      /* Estilos específicos para o modal de experiência */
      .modal-experience-dark .modal-content {
        background-color: #000 !important;
        color: #fff !important;
        border: 1px solid #333 !important;
      }

      .modal-experience-dark .modal-header {
        background-color: #111 !important;
        border-bottom: 1px solid #333 !important;
      }

      .modal-experience-dark .modal-footer {
        background-color: #111 !important;
        border-top: 1px solid #333 !important;
      }

      .modal-experience-dark .exp-card {
        background-color: #1a1a1a !important;
        border: 1px solid #333 !important;
        border-radius: 8px;
        padding: 1.5rem;
        margin-bottom: 1.5rem;
      }

      .modal-experience-dark .destaque {
        background-color: #2b3a55 !important;
        color: white !important;
        padding: 0.3rem 0.8rem;
        border-radius: 20px;
        font-size: 0.9em;
      }

      .modal-experience-dark .tags span {
        background-color: #333 !important;
        color: #fff !important;
        padding: 0.3rem 0.8rem;
        border-radius: 15px;
        font-size: 0.85em;
      }

      .modal-experience-dark .realizacoes li {
        color: #fff !important;
        margin: 0.5rem 0;
        line-height: 1.6;
      }

      .modal-experience-dark .cargo {
        color: #a0aec0 !important;
        margin-bottom: 1rem;
        font-weight: 500;
      }

      .modal-experience-dark .btn-close {
        filter: invert(1) !important;
      }

      /* Estilos gerais para cards */
      .exp-card {
        transition: transform 0.2s;
      }
      .exp-card:hover {
        transform: translateY(-3px);
      }
      .empresa-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      .tags {
        margin-top: 1rem;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
      }
      .realizacoes {
        list-style: none;
        padding-left: 0;
      }
    `
  ]
})
export class AppComponent {
  isDarkMode = false;

  constructor(private renderer: Renderer2) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    const body = document.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark-mode');
    } else {
      this.renderer.removeClass(body, 'dark-mode');
    }
  }
}