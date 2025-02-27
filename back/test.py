import google.generativeai as genai
import typing_extensions as typing
import json  # Adicionando a importação do módulo json
from colorama import Fore, Style, init  # Importando colorama
import googlemaps
import time  # Importar time para lidar com a espera entre as requisições
import os  # Importar os para manipulação de arquivos
import pandas as pd
from tqdm import tqdm
import requests  # Importar requests para baixar imagens
import instaloader  # Importar instaloader para baixar fotos de perfil do Instagram

init(autoreset=True)  # Inicializando colorama

genai.configure(api_key="AIzaSyAatGCqWcC8x-qrTJsR5iBxs6Y9RMIkPlI")

# Schema object definition
class Sites(typing.TypedDict):
    nome: str
    descricao: str
    link: str
    

model = genai.GenerativeModel(
    "gemini-1.5-flash",
    generation_config={"response_mime_type": "application/json"}
)




def buscar_lugares(cidade, tipo_lugar, api_key):
    # Inicializa o cliente do Google Maps
    gmaps = googlemaps.Client(key=api_key)
    
    lugares = []
    # Faz uma busca por lugares do tipo especificado na cidade
    resultado = gmaps.places(query=f"{tipo_lugar} em {cidade}")

    while resultado:
        for lugar in resultado.get('results', []):
            info_lugar = {
                'id': lugar.get('place_id'),
                'nome': lugar.get('name'),
                'endereco': lugar.get('formatted_address'),
                'rating': lugar.get('rating'),
                'numero_de_reviews': lugar.get('user_ratings_total'),
                'localizacao': lugar.get('geometry', {}).get('location'),
                'tipo': lugar.get('types')
            }
            lugares.append(info_lugar)

        # Verifica se há um token de próxima página
        next_page_token = resultado.get('next_page_token')
        if next_page_token:
            # Aguarda um pouco antes de fazer a próxima requisição
            time.sleep(4)  # Espera 4 segundos para garantir que o token esteja ativo
            resultado = gmaps.places(query=f"{tipo_lugar} em {cidade}", page_token=next_page_token)
        else:
            break

    return lugares

def buscar_detalhes_lugar(place_id, api_key):
    # Inicializa o cliente do Google Maps
    gmaps = googlemaps.Client(key=api_key)
    
    # Busca detalhes do lugar
    detalhes = gmaps.place(place_id=place_id, fields=[
        'name', 'formatted_address', 'rating', 'user_ratings_total', 
        'geometry/location', 'reviews', 'website', 'formatted_phone_number',
        'business_status', 'opening_hours', 'url', 'photo'
    ])
    
    lugar_detalhado = detalhes.get('result', {})
    
    # Salva apenas a primeira imagem do lugar
    if 'photos' in lugar_detalhado and lugar_detalhado['photos']:
        photo_reference = lugar_detalhado['photos'][0]['photo_reference']
        photo = gmaps.places_photo(photo_reference=photo_reference, max_width=400)
        with open(f"imagens/{place_id}_0.png", 'wb') as img_file:
            for chunk in photo:
                img_file.write(chunk)
    
    return {
        'id': place_id,
        'nome': lugar_detalhado.get('name'),
        'endereco': lugar_detalhado.get('formatted_address'),
        'rating': lugar_detalhado.get('rating'),
        'numero_de_reviews': lugar_detalhado.get('user_ratings_total'),
        'localizacao': lugar_detalhado.get('geometry', {}).get('location'),
        'avaliacoes': lugar_detalhado.get('reviews', []),
        'site': lugar_detalhado.get('website'),
        'telefone': lugar_detalhado.get('formatted_phone_number'),
        'status_comercial': lugar_detalhado.get('business_status'),
        'horario_funcionamento': lugar_detalhado.get('opening_hours', {}).get('weekday_text', []),
        'url': lugar_detalhado.get('url')
    }

def salvar_logo_rede_social(site, place_id):
    if "instagram.com" in site:
        # Extrai o nome de usuário do URL do Instagram
        username = site.split("instagram.com/")[-1].strip("/").split("?")[0]
        
        # Usa o Instaloader para baixar a foto de perfil
        L = instaloader.Instaloader()
        try:
            profile = instaloader.Profile.from_username(L.context, username)
            profile_pic_url = profile.profile_pic_url
            response = requests.get(profile_pic_url)
            if response.status_code == 200:
                with open(f"logos/{place_id}.png", 'wb') as img_file:
                    img_file.write(response.content)
        except Exception as e:
            print(f"Erro ao baixar a foto de perfil do Instagram para {username}: {e}")

# Certifique-se de que as pastas 'imagens' e 'logos' existem
os.makedirs('imagens', exist_ok=True)
os.makedirs('logos', exist_ok=True)

# Exemplo de uso
api_key = "AIzaSyDfTbyPjWcopcdhzyxTEs9U-ui40Y-DGAk"
cidade = "Ribeirão Preto"
tipo_lugar = "academias"
lugares = buscar_lugares(cidade, tipo_lugar, api_key)

dados = []

for lugar in tqdm(lugares, desc="Processando lugares"):
    detalhes = buscar_detalhes_lugar(lugar['id'], api_key)
    site = detalhes['site']
    rede_social = None

    if site:
        if "facebook.com" in site or "instagram.com" in site or "linkedin.com" in site:
            rede_social = site
            site = None
            salvar_logo_rede_social(rede_social, lugar['id'])

    dados.append({
        'Nome': detalhes['nome'],
        'Endereço': detalhes['endereco'],
        'Rating': detalhes['rating'],
        'Número de Reviews': detalhes['numero_de_reviews'],
        'Latitude': detalhes['localizacao']['lat'],
        'Longitude': detalhes['localizacao']['lng'],
        'Site': site,
        'Rede Social': rede_social,
        'Telefone': detalhes['telefone'],
        'Status Comercial': detalhes['status_comercial'],
        'Horário de Funcionamento': detalhes['horario_funcionamento'],
        'URL': detalhes['url']
    })

df = pd.DataFrame(dados)
df.to_excel("lugares_detalhados.xlsx", index=False)
