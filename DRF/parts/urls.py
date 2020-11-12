from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.SpareList.as_view(), name='list_sp'),
    path('spare/', views.SparePartList.as_view(), name='list_spare'),
    path('spare/<int:pk>', views.SparePartRetrieve.as_view(), name='list_retrieve'),
    path('quaries/', views.QuaryList.as_view(), name='list_quaries'),
    path('quary/', views.QuaryListCreate.as_view(), name='quary_list'),
    path('quary/<int:pk>', views.QuaryRetrieve.as_view(), name='quary_retrieve'),
    #Admin Spare Parts Urls
    path('admin/create/', views.AddSpare.as_view(), name='createspare'),
    path('admin/edit/sparedetail/<int:pk>/', views.AdminSpareDetail.as_view(), name='admindetailspare'),
    path('admin/edit/<int:pk>/', views.EditSpare.as_view(), name='editspare'),
    path('admin/delete/<int:pk>/', views.DeleteSpare.as_view(), name='deletespare'),
    path('export-spare/', views.export, name='export'),
    #Admin Quary Urls
    path('admin-quary/create-quary/', views.AddQuary.as_view(), name='createquary'),
    path('admin-quary/edit-quary/quarydetail/<int:pk>/', views.AdminQuaryDetail.as_view(), name='admindetailquary'),
    path('admin-quary/edit-quary/<int:pk>/', views.EditQuary.as_view(), name='editquary'),
    path('admin-quary/delete-quary/<int:pk>/', views.DeleteQuary.as_view(), name='deletequary'),
]

