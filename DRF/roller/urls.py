from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.RollerList.as_view(), name='roller_list'),
    path('create-rol/', views.RollerCreateList.as_view(), name='listcreate_roller'),
    path('rol/<int:pk>', views.RollerRetrieve.as_view(), name='roller_retrieve'),
        #Admin Roller Urls
    path('admin-roller/create-roller/', views.AddRoller.as_view(), name='creatroller'),
    path('admin-roller/edit-roller/rollerdetail/<int:pk>/', views.AdminRollerDetail.as_view(), name='admindetailroller'),
    path('admin-roller/edit-roller/<int:pk>/', views.EditRoller.as_view(), name='editroller'),
    path('admin-roller/delete-roller/<int:pk>/', views.DeleteRoller.as_view(), name='deleteroller'),
]