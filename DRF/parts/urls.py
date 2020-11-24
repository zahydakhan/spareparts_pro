from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.SpareList.as_view(), name='list_sp'),
    path('spare/', views.SparePartList.as_view(), name='list_spare'),
    path('spare/<int:pk>', views.SparePartRetrieve.as_view(), name='list_retrieve'),
    #SparePart_mp
    path('spare_mp/', views.SparePart_mp.as_view(), name='list_spare_mp'),
    #SparePart_get
    path('spare_get/', views.SparePart_get.as_view(), name='list_spare_get'),
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
    #Admin Order Urls
    path('orders/', views.OrderList.as_view(), name='list_quaries'),
    path('order/', views.OrderListCreate.as_view(), name='quary_list'),
    path('order/<int:pk>', views.OrderRetrieve.as_view(), name='quary_retrieve'),
    path('admin-order/create-order/', views.AddOrder.as_view(), name='createquary'),
    path('admin-order/edit-order/orderdetail/<int:pk>/', views.OrderDetail.as_view(), name='admindetailquary'),
    path('admin-order/edit-order/<int:pk>/', views.EditOrder.as_view(), name='editquary'),
    path('admin-order/delete-order/<int:pk>/', views.DeleteOrder.as_view(), name='deletequary'),
    # Main Order Urls
    path('admin-mainorder/create-mainorder/', views.CreateMainOrder.as_view(), name='create-main'),
    path('main-order/', views.MainOrderList.as_view(), name='main-order'),
]

