from rest_framework import generics
from .models import SpareParts, QuaryDetail
from .serializers import SparePartsSerializer, QuaryDetailSerializer
from rest_framework.permissions import IsAuthenticated
from .resources import SparePartsResource 
from django.http import HttpResponse

# Create your views here.
class SparePartList(generics.ListCreateAPIView):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer
    permission_classes = [IsAuthenticated]

class SpareList(generics.ListAPIView):
    serializer_class = SparePartsSerializer
    queryset = SpareParts.objects.all()

class SparePartRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer
  

class QuaryListCreate(generics.ListCreateAPIView):
    queryset = QuaryDetail.objects.all()
    serializer_class = QuaryDetailSerializer

class QuaryList(generics.ListAPIView):
    serializer_class = QuaryDetailSerializer
    queryset = QuaryDetail.objects.all()

class QuaryRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = QuaryDetail.objects.all()
    serializer_class = QuaryDetailSerializer

# Admin Spare Parts Views
class AddSpare(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer

class AdminSpareDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = SpareParts.objects.all()
    serializer_class = SparePartsSerializer

class EditSpare(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = SparePartsSerializer
    queryset = SpareParts.objects.all()

class DeleteSpare(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = SparePartsSerializer
    queryset = SpareParts.objects.all()

def export(request):
    spare_resource = SparePartsResource()
    dataset = spare_resource.export()
    response = HttpResponse(dataset.csv, content_type='text/csv')
    response = HttpResponse(dataset.xls, content_type='application/vnd.ms-excel')
    response['Content-Disposition'] = 'attachment; filename="persons.xls"' 
    return response

# Admin Quary Views
class AddQuary(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = QuaryDetail.objects.all()
    serializer_class = QuaryDetailSerializer

class AdminQuaryDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = QuaryDetail.objects.all()
    serializer_class = QuaryDetailSerializer

class EditQuary(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QuaryDetailSerializer
    queryset = QuaryDetail.objects.all()

class DeleteQuary(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = QuaryDetailSerializer
    queryset = QuaryDetail.objects.all()



