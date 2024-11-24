from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('/all_courses',views.all_courses,name="all_courses"),
    path('/video_profile',views.video_list,name="video_profile"),
]
