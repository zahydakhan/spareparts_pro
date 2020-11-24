from django.urls import path
from .views import CustomUserCreate, BlacklistTokenUpdateView, UserList, UserDetail, EditUser, DeleteUser
from rest_framework_jwt.views import obtain_jwt_token

app_name = 'users'

urlpatterns = [
    path('register/', CustomUserCreate.as_view(), name="create_user"),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
         name='blacklist'),
    path('', UserList.as_view(), name='userlist'),
    path('user/<int:pk>/', UserDetail.as_view(), name='userdetail'),
    path('user/edit/<int:pk>/', EditUser.as_view(), name='useredit'),
    path('user/delete/<int:pk>/', DeleteUser.as_view(), name='userdelete'),
    path('api-token-auth/', obtain_jwt_token),
]