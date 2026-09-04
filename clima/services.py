import requests

def obter_clima_por_coordenadas(lat, lon):
    """
    Consulta a API Open-Meteo e retorna os dados de clima tratados.
    """
    url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true"
    
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        data = response.json()
        
        clima_atual = data.get('current_weather', {})
        
        return {
            'sucesso': True,
            'temperatura': clima_atual.get('temperature'),
            'velocidade_vento': clima_atual.get('windspeed'),
            'direcao_vento': clima_atual.get('winddirection'),
            'codigo_clima': clima_atual.get('weathercode')
        }
    except requests.RequestException as e:
        return {'sucesso': False, 'erro': str(e)}


def buscar_coordenadas_por_nome(nome_cidade):
    """
    Busca as coordenadas de uma cidade/província em Angola via Geocoding.
    """
    url = f"https://geocoding-api.open-meteo.com/v1/search?name={nome_cidade}&count=1&countryCode=AO"
    
    try:
        response = requests.get(url, timeout=5)
        response.raise_for_status()
        data = response.json()
        
        results = data.get('results')
        if results and len(results) > 0:
            local = results[0]
            return {
                'sucesso': True,
                'nome': local.get('name'),
                'provincia': local.get('admin1', local.get('name')),
                'latitude': local.get('latitude'),
                'longitude': local.get('longitude')
            }
        return {'sucesso': False, 'erro': 'Localização não encontrada em Angola.'}
    except requests.RequestException as e:
        return {'sucesso': False, 'erro': str(e)}