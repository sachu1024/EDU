from django.shortcuts import render
from .models import QuizQuestion

def index(request):
    questions = QuizQuestion.objects.all()
    return render(request, 'index.html', {'questions': questions})


def all_courses(request):
    return render(request,'all-courses.html')

def video_list(request):
    return render(request,'course-details.html')
