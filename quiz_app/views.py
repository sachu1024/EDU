from django.shortcuts import render
from .models import QuizQuestion

def index(request):
    questions = QuizQuestion.objects.all()
    return render(request, 'index.html', {'questions': questions})
