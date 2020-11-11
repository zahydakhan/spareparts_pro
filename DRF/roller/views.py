from rest_framework import generics
from .models import Roller
from .serializers import RollerSerializer
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse

# Create your views here.
class RollerCreateList(generics.ListCreateAPIView):
    queryset = Roller.objects.all()
    serializer_class = RollerSerializer
    permission_classes = [IsAuthenticated]

class RollerList(generics.ListAPIView):
    serializer_class = RollerSerializer
    queryset = Roller.objects.all()

class RollerRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = Roller.objects.all()
    serializer_class = RollerSerializer

# Admin Roller Views
class AddRoller(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Roller.objects.all()
    serializer_class = RollerSerializer

class AdminRollerDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Roller.objects.all()
    serializer_class = RollerSerializer

class EditRoller(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Roller.objects.all()
    serializer_class = RollerSerializer

class DeleteRoller(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Roller.objects.all()
    serializer_class = RollerSerializer