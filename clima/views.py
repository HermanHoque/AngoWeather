from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_GET
from .services import obter_clima_por_coordenadas, buscar_coordenadas_por_nome

# Create your views here.

def index(request):
    return render(request, 'index.html')

@require_GET
def api_clima(request):
  
    lat = request.GET.get('lat')
    lon = request.GET.get('lon')
    cidade = request.GET.get('cidade')

    # Busca por Coordenadas (GPS do navegador)
    if lat and lon:
        dados_clima = obter_clima_por_coordenadas(lat, lon)
        return JsonResponse({
            'local': 'Sua Localização',
            'clima': dados_clima
        })

    # Busca por Nome da Cidade / Província
    if cidade:
        geo_info = buscar_coordenadas_por_nome(cidade)
        if not geo_info['sucesso']:
            return JsonResponse({'erro': geo_info['erro']}, status=404)
        
        dados_clima = obter_clima_por_coordenadas(geo_info['latitude'], geo_info['longitude'])
        
        return JsonResponse({
            'local': geo_info['nome'],
            'provincia': geo_info['provincia'],
            'coordenadas': {
                'lat': geo_info['latitude'],
                'lon': geo_info['longitude']
            },
            'clima': dados_clima
        })

    return JsonResponse({'erro': 'Informe lat/lon ou o nome da cidade.'}, status=400)