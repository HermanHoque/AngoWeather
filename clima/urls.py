from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Rota padrão para a página inicial
    path('api/', views.api_clima, name='api_clima'),
]