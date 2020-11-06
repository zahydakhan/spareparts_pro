from rest_framework import generics
from .models import SpareParts, QuaryDetail
from .serializers import SparePartsSerializer, QuaryDetailSerializer
from rest_framework.permissions import IsAuthenticated

# Create your views here.
class SparePartList(generics.ListCreateAPIView):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer

class SparePartRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer
  

class QuaryList(generics.ListCreateAPIView):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer

class QuaryRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer



