
# my_auth/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from .forms import SignupForm, LoginForm
from .models import Profile
from django.http import HttpResponse
from django.contrib.auth import logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

def signup_view(request):
    if request.method == "POST":
        form = SignupForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data['email']
            password = form.cleaned_data['password']
            full_name = form.cleaned_data['full_name']
            
            # Create user and profile
            user = User.objects.create_user(username=email, email=email, password=password)
            Profile.objects.create(user=user, full_name=full_name)
            messages.success(request, "Sign up successful!")
            return redirect('login')
    else:
        form = SignupForm()
    return render(request, 'signup.html', {'form': form})

def login_view(request):
    if request.method == "POST":
        email = request.POST.get('email')
        password = request.POST.get('password')
        
        # Django's default authentication works with `username`. 
        # You can adjust if using email for login.
        user = authenticate(request, username=email, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, "Login successfully!")
            return redirect('all_courses')  # Replace 'home' with your desired redirect URL
        else:
            messages.error(request, "Invalid email or password")
    
    return render(request, 'login.html')

def user_logout(request):
    logout(request)
    return redirect('login')

@login_required
def home(request):
    return render(request,'home.html')
