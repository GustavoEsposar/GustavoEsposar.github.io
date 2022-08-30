// --------- Tokens Storage --------- 
const leftAside = document.querySelector('.left-aside')
const buttonAbout = document.querySelector('.about')
const buttonProjects = document.querySelector('.projects')
//-----------------------------------

buttonAbout.onclick = () => {
    leftAside.innerHTML = `
        <h1>Sobre mim</h1>
        <p>
            Olá, sou o Gustavo, estudante de <strong>Ciência da Computação</strong> na <strong><em>PUC-SP</em></strong>
            e atualmente no quarto período do curso. Seja muito bem-vindo(a) ao meu Portfólio!
        </p>
        <p>
            Na seção <span><strong>Projetos</strong></span> estão disponíveis alguns trabalhos desenvolvidos para estudo.
            Atualmente focado em Desenvolvimento Web e entusiasmado com UI/UX, área que tenho muito interesse
            em me aprofundar para um desenvolvimento Front-End bem arquitetado.
        </p>
        <p> 
            No entanto não deixo o Back-End
            de lado, sendo minha ênfase de Back banco de dados não relacionais como MongoDB.</p>
        <p>
            <h3>Habilidades:</h3>
            <ul>
                <li>C</li>
                <li>Java</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </p>
        <p>
            Apaixonado por música, tenho como hobbies tocar guitarra, praticar musculação e as vezes "exercitar
            minha paciência" com jogos FPS competitivos.
        </p>
    `
}

buttonProjects.onclick = () => {
    leftAside.innerHTML = `
        <h1>Projetos</h1>
        <p>
            <ul class="projectsList">
                <li class="project">
                    <a href="desafioConsultaCEP/index.html" target="_blank" rel="noopener noreferrer">Consulta CEP</a>
                    <img class="previewPic" src="docs_consultaCep/preview_consultaCep.png" alt="Miniatura: projeto consulta cep">
                </li>
                <li class="project">
                    <a href="https://github.com/GustavoEsposar/Josephus_Problem" target="_blank" rel="noopener noreferrer">Josephus_Problem</a>
                    <img class="previewPic" src="docs_consultaCep/preview_Josephus_Problem.png" alt="Miniatura: projeto Josephus problem">
                </li>
                <li class="project">
                    <a href="https://github.com/GustavoEsposar/Student_Registration" target="_blank" rel="noopener noreferrer">Student_Registration</a>
                    <img class="previewPic" src="docs_consultaCep/preview_Student_Registration.png" alt="Miniatura: projeto Student Registration">
                </li>
                <li class="project">
                    <a href="https://github.com/GustavoEsposar/ggfx_lic_domino" target="_blank" rel="noopener noreferrer">ggfx_lic_domino</a>
                    <img class="previewPic" src="docs_consultaCep/preview_ggfx_lic_domino.png" alt="Miniatura: projeto domino (lab)">
                </li>
            </ul>
        </p>
    `
}
