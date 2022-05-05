from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from api.FBV import show_film, show_films
from api.CBV import show_categoriesAPIView, show_categoryAPIView


urlpatterns = [
    path('login/', obtain_jwt_token),

    path('films', show_films),
    path('films/<int:film_id>/', show_film),

    path('categories', show_categoriesAPIView.as_view()),
    path('categories/<int:pk>/', show_categoryAPIView.as_view())
]