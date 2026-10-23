# 🌦️ AngoWeather

<p align="center">
  <strong>Previsão meteorológica para Angola, desenvolvida com Django e Open-Meteo.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
  <img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django">
  <img src="https://img.shields.io/badge/Open--Meteo-API-4CAF50?style=for-the-badge" alt="Open-Meteo API">
  <img src="https://img.shields.io/badge/uv-Package_Manager-DE5FE9?style=for-the-badge" alt="uv">
</p>

---

## 📌 Sobre o projeto

O **AngoWeather** é uma aplicação web desenvolvida com Python e Django, integrada com a API meteorológica [Open-Meteo](https://open-meteo.com/), com o objetivo de disponibilizar informações e previsões meteorológicas para diferentes localidades de Angola.

O projeto foi criado como uma oportunidade de aprendizagem e prática no desenvolvimento de aplicações web, integração de APIs externas e utilização do Django.

## ✨ Funcionalidades

- 🌤️ **Informações meteorológicas:** consulta de dados meteorológicos através da API Open-Meteo.
- 📍 **Localidades de Angola:** foco nas províncias e municípios angolanos.
- 🔗 **Integração com API externa:** obtenção de dados meteorológicos através de uma fonte externa.
- 🐍 **Desenvolvimento com Django:** utilização de Python e Django na construção da aplicação web.

> A disponibilidade de cada funcionalidade depende da implementação atual do projeto e dos dados efetivamente apresentados pela aplicação.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| Python | Linguagem de programação principal |
| Django | Framework de desenvolvimento web |
| Open-Meteo API | Fornecimento de dados meteorológicos |
| uv | Gestão de dependências e ambiente Python |

## ⚙️ Requisitos

Antes de começares, certifica-te de que tens:

- Python instalado e compatível com a versão definida pelo projeto.
- `uv` instalado na tua máquina.
- Git, caso pretendas clonar o repositório.

## 🚀 Instalação e execução

### 1. Clonar o repositório

```bash
git clone URL_DO_TEU_REPOSITORIO
```

Entra na pasta do projeto:

```bash
cd AngoWeather
```

Substitui `URL_DO_TEU_REPOSITORIO` pelo endereço real do teu repositório no GitHub.

### 2. Instalar o uv

O `uv` é uma ferramenta para gerir dependências e ambientes Python.

**Linux / macOS**

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**Windows — PowerShell**

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

Depois da instalação, abre um novo terminal, se necessário, e confirma:

```bash
uv --version
```

### 3. Instalar as dependências

Na raiz do projeto, executa:

```bash
uv sync
```

Este comando cria ou sincroniza o ambiente virtual e instala as dependências declaradas na configuração do projeto.

### 4. Ativar o ambiente virtual

Se precisares de ativar o ambiente manualmente, utiliza o comando correspondente ao teu sistema operativo.

**Windows — CMD**

```bat
.venv\Scripts\activate.bat
```

**Windows — PowerShell**

```powershell
.venv\Scripts\Activate.ps1
```

**Linux / macOS**

```bash
source .venv/bin/activate
```

> A ativação manual é opcional quando utilizas os comandos do `uv` para executar a aplicação.

### 5. Iniciar o servidor Django

Com o ambiente preparado, executa:

```bash
uv run python manage.py runserver
```

Em alternativa, se o ambiente virtual já estiver ativado:

```bash
python manage.py runserver
```

### 6. Aceder à aplicação

Abre o seguinte endereço no navegador:

**[http://127.0.0.1:8000/angoweather/](http://127.0.0.1:8000/angoweather/)**

Certifica-te de que o servidor está em execução antes de acederes à aplicação.

## 🌐 API meteorológica

O AngoWeather utiliza a API [Open-Meteo](https://open-meteo.com/) para obter dados meteorológicos.

- Documentação oficial: https://open-meteo.com/en/docs
- Página principal: https://open-meteo.com/

Consulta a documentação oficial para conhecer os parâmetros disponíveis, os dados meteorológicos suportados e as condições de utilização.

## 🎯 Objetivos de aprendizagem

Este projeto permite praticar conceitos importantes de desenvolvimento web, nomeadamente:

- Integração de APIs externas com Django.
- Consumo e tratamento de dados meteorológicos.
- Criação de aplicações web com Python.
- Gestão de dependências com `uv`.
- Organização e documentação de projetos de software.

## 🖼️ Demonstração

Para melhorar a apresentação do repositório, adiciona capturas de ecrã reais da aplicação nesta secção.

Exemplo de organização dos ficheiros:

```text
AngoWeather/
├── README.md
└── screenshots/
    ├── pagina-inicial.png
    └── previsao-meteorologica.png
```

Depois de adicionares as imagens, podes apresentá-las assim:

```markdown
![Página inicial do AngoWeather](screenshots/pagina-inicial.png)
```

## 🗺️ Melhorias futuras

Algumas possibilidades de evolução do projeto:

- [ ] Melhorar a pesquisa de localidades.
- [ ] Apresentar previsões meteorológicas para diferentes períodos.
- [ ] Melhorar a apresentação dos dados meteorológicos.
- [ ] Adicionar testes automatizados.
- [ ] Melhorar o tratamento de erros da API.
- [ ] Documentar a arquitetura e os endpoints da aplicação, caso existam.

## 👨‍💻 Autor

**Herman Hoque**

Estudante e programador interessado em desenvolvimento web, APIs e cibersegurança.

- GitHub: [Visitar o meu perfil](https://github.com/TEU_USERNAME)

Substitui `TEU_USERNAME` pelo teu nome de utilizador real no GitHub.

---

<p align="center">
  <sub>AngoWeather — Projeto de aprendizagem e desenvolvimento web com API.</sub>
</p>

