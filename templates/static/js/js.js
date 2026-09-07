      const searchInput = document.getElementById('search-input');
      const suggestionsEl = document.getElementById('suggestions');
      const loadingState = document.getElementById('loading-state');
      const weatherContent = document.getElementById('weather-content');
      const tagOrigin = document.getElementById('tag-origin');
      const badgeLocation = document.getElementById('badge-location');
      const weatherIcon = document.getElementById('weather-icon');

      // Endereço base API Django rodando localmente
      const DJANGO_API_URL = 'https://angoweather.onrender.com/angoweather/api';

      // INICIALIZAÇÃO: Pedir geolocalização ao abrir a página
      window.addEventListener('DOMContentLoaded', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              carregarClimaDoDjango({ lat: latitude, lon: longitude }, "Sua Localização Atual", "GPS Ativo");
            },
            (error) => {
              carregarClimaDoDjango({ cidade: 'Luanda' }, "Luanda (Padrão)", "Capital");
            }
          );
        } else {
          carregarClimaDoDjango({ cidade: 'Luanda' }, "Luanda (Padrão)", "Capital");
        }
      });

      // FUNÇÃO PRINCIPAL: Consome a API Django
      async function carregarClimaDoDjango(params, nomeExibicao, tagTexto) {
        loadingState.classList.remove('hidden');
        weatherContent.classList.add('hidden');

        try {
          const queryString = new URLSearchParams(params).toString();
          const response = await fetch(`${DJANGO_API_URL}?${queryString}`);
          
          if (!response.ok) {
            throw new Error("Erro ao buscar dados do servidor.");
          }

          const data = await response.json();
          const clima = data.clima;

          if (!clima || !clima.sucesso) {
            alert("Não foi possível obter o clima para esta localização.");
            return;
          }

          // Atualiza os elementos da interface com o JSON devolvido pelo Django
          document.getElementById('city-name').innerText = data.local || clima.name || nomeExibicao;
          document.getElementById('temp-val').innerText = Math.round(clima.temperatura);
          document.getElementById('wind-speed').innerText = `${clima.velocidade_vento} km/h`;
          document.getElementById('wind-dir').innerText = `${clima.direcao_vento}°`;
          document.getElementById('weather-desc').innerText = mapearCodigoClima(clima.codigo_clima);
          
          // Atualiza o ícone do FontAwesome
          weatherIcon.className = `fa-solid ${obterIconeClima(clima.codigo_clima)}`;
          
          tagOrigin.innerText = tagTexto;
          badgeLocation.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500"></span> Conectado`;

          loadingState.classList.add('hidden');
          weatherContent.classList.remove('hidden');
        } catch (err) {
          console.error("Erro na requisição:", err);
          loadingState.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-amber-500 text-2xl mb-2"></i><span>Erro ao conectar com o servidor. Certifique-se que o servidor está a rodar.</span>`;
        }
      }

      // FUNÇÃO AUXILIAR DE PESQUISA
      function dispararPesquisa(termo) {
        if (!termo) return;
        carregarClimaDoDjango({ cidade: termo }, termo, "Resultado da Pesquisa");
        searchInput.value = termo;
        suggestionsEl.classList.add('hidden');
      }

      // AUTOCOMPLETAR DINÂMICO
      let timerBusca = null;
      searchInput.addEventListener('input', (e) => {
        clearTimeout(timerBusca);
        const termo = e.target.value.trim();

        if (termo.length < 2) {
          suggestionsEl.classList.add('hidden');
          return;
        }

        timerBusca = setTimeout(async () => {
          try {
            const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(termo)}&count=5&countryCode=AO`;
            const res = await fetch(geoUrl);
            const data = await res.json();

            suggestionsEl.innerHTML = '';

            if (data.results && data.results.length > 0) {
              data.results.forEach(local => {
                const li = document.createElement('li');
                li.className = "px-5 py-3 hover:bg-slate-700 cursor-pointer flex justify-between items-center text-sm text-slate-200 transition-colors";
                
                const provinciaTexto = local.admin1 ? ` (${local.admin1})` : '';
                li.innerHTML = `<span><strong>${local.name}</strong><span class="text-slate-400">${provinciaTexto}</span></span> <span class="text-xs text-blue-400"><i class="fa-solid fa-arrow-turn-down rotate-90"></i></span>`;
                
                li.addEventListener('click', () => {
                  dispararPesquisa(local.name);
                });

                suggestionsEl.appendChild(li);
              });
              suggestionsEl.classList.remove('hidden');
            } else {
              const li = document.createElement('li');
              li.className = "px-5 py-3 text-sm text-slate-400 italic";
              li.innerText = `Nenhuma província ou cidade encontrada para "${termo}"`;
              suggestionsEl.appendChild(li);
              suggestionsEl.classList.remove('hidden');
            }
          } catch (err) {
            console.error("Erro nas sugestões:", err);
          }
        }, 300);
      });

      // Captura da Tecla Enter
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const termo = searchInput.value.trim();
          if (termo.length >= 2) {
            dispararPesquisa(termo);
          }
        }
      });

      // Fecha a lista ao clicar fora
      document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !suggestionsEl.contains(e.target)) {
          suggestionsEl.classList.add('hidden');
        }
      });

      // Funções auxiliares para mapear código do clima para Texto e Ícone
      function mapearCodigoClima(code) {
        if (code === 0) return "Céu Limpo";
        if (code <= 3) return "Parcialmente Nublado";
        if (code <= 48) return "Nevoeiro";
        if (code <= 67) return "Chuva / Chuvisco";
        if (code <= 82) return "Chuva Forte / Aguaceiros";
        return "Trovoadas / Tempestade";
      }

      function obterIconeClima(code) {
        if (code === 0) return "fa-sun";
        if (code <= 3) return "fa-cloud-sun";
        if (code <= 48) return "fa-smog";
        if (code <= 67) return "fa-cloud-rain";
        if (code <= 82) return "fa-cloud-showers-heavy";
        return "fa-bolt";
      }