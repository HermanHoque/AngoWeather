# AngoWeather
Este Projecto foi feito com Python + Django integando a API chama open-meteo

Aplicação web desenvolvida para fornecer previsões meteorológicas precisas para todas as províncias e municípios de Angola.
Bom projecto para estudo de APIs e criação de APIs com Django

## Como Instalar e Executar o Projeto (Usando uv)

Este projeto utiliza o "uv" para gestão rápida de ambientes virtuais e dependências Python.

## Requisitos
Certifique-se de que tem o python instalado na sua máquina

Como instalar o "uv" na sua máquina:
**Linux / macOS:** `curl -LsSf https://astral.sh/uv/install.sh | sh`
**Windows (PowerShell):** `powershell -c "irm https://astral.sh/uv/install.ps1 | iex"`

## Criar o Ambiente Virtual e Instalar Dependências
Na raiz no projecto digite no terminal: uv sync

## Iniciar o Servidor
Entra no ambiente virtual do python: 
windows -> .venv\Scripts\activate
linux -> source .venv/bin/activate
macOS -> source .venv/bin/activate

Inicia o servidor Django com -> python manage.py runserver
