from django.shortcuts import render
from django.conf import settings
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

def test(request):
    return JsonResponse({'message': 'Hello, World!'})