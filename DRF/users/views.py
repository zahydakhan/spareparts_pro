from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import NewUser
from rest_framework import generics


class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class UserList(generics.ListAPIView):
    queryset = NewUser.objects.all()
    serializer_class = CustomUserSerializer


class UserDetail(generics.RetrieveAPIView):
    queryset = NewUser.objects.all()
    serializer_class = CustomUserSerializer

class EditUser(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = NewUser.objects.all()
    serializer_class = CustomUserSerializer

class DeleteUser(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = NewUser.objects.all()
    serializer_class = CustomUserSerializer
