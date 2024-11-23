from django.urls import path
from . import views

urlpatterns = [
    path('/login', views.login_view, name='login'),
    path('/signup', views.signup_view, name='signup'),
    path('logout/', views.user_logout, name='logout'),
    path('home/', views.home, name='home'),
]
