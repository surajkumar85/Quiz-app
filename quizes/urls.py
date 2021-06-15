from django.urls import path
from . import views
urlpatterns = [
    path('',views.QuizListView.as_view(),name='main_page'),
    path("quizes/<pk>/",views.quiz_view,name='quiz_detail'),
    path("quizes/<pk>/data/",views.quiz_data_view,name='quiz_data_view'),
    path("quizes/<pk>/save/",views.save_quiz_view,name='save_quiz_view'),
    ]