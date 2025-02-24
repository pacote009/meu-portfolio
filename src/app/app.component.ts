import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container" [ngClass]="{ 'dark-mode': isDarkMode }">
      <button class="btn-toggle" (click)="toggleDarkMode()">{{ isDarkMode ? '☀️' : '🌙' }}</button>
      <header>
        <div class="hero">
          <h1>Vitor de Mello Leite</h1>
          <p>Analista de Sistemas | Segurança da Informação | Desenvolvimento de Software</p>
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

      <!-- Modal -->
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

      <section class="projects">
        <div class="social-links">
          <h2>Conecte-se comigo</h2>
          <a href="https://www.linkedin.com/in/vitor-mello-73884224a/" target="_blank" class="social-btn linkedin">LinkedIn</a>
          <a href="https://github.com/pacote009" target="_blank" class="social-btn github">GitHub</a>
          <a href="https://instagram.com/seuusuario" target="_blank" class="social-btn instagram">Instagram</a>
        </div>
      </section>
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
      .github { background-color: #000; }
      .instagram { background-color: #E4405F; }
      .btn-custom {
        background-color: black !important;
        color: white;
      }
    `
  ]
})
export class AppComponent {
  isDarkMode = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
