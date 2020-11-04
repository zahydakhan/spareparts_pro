from django.urls import path, include
from . import views

urlpatterns = [
    path('spare/', views.SparePartList.as_view(), name='list_spare'),
    path('spare/<int:pk>', views.SparePartRetrieve.as_view(), name='list_retrieve'),
    path('quary/', views.QuaryList.as_view(), name='quary_spare'),
    path('quary/<int:pk>', views.QuaryRetrieve.as_view(), name='quary_retrieve'),
]

