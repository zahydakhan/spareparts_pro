from rest_framework import generics
from .models import SpareParts, QuaryDetail, Order, MainOrder
from .serializers import SparePartsSerializer, QuaryDetailSerializer, OrdersSerializer, MainOrderSerializer
from rest_framework.permissions import IsAuthenticated
from .resources import SparePartsResource 
from django.http import HttpResponse

# Create your views here.
class SparePartList(generics.ListCreateAPIView):
    queryset = SpareParts.MnLinerObjects.all()
    serializer_class = SparePartsSerializer
    permission_classes = [IsAuthenticated]

class SparePart_mp(generics.ListCreateAPIView):
    queryset = SpareParts.MpObjects.all()
    serializer_class = SparePartsSerializer
    permission_classes = [IsAuthenticated]

class SparePart_get(generics.ListCreateAPIView):
    queryset = SpareParts.GetObjects.all()
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

# Admin Order Views
class AddOrder(generics.CreateAPIView):
    #permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer

class OrderDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer

class EditOrder(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer

class DeleteOrder(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer

class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer

class OrderList(generics.ListAPIView):
    serializer_class = OrdersSerializer
    queryset = Order.objects.all()

class OrderRetrieve(generics.RetrieveUpdateDestroyAPIView):
    queryset = Order.objects.all()
    serializer_class = OrdersSerializer

# Admin Order Views
class CreateMainOrder(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = MainOrder.objects.all()
    serializer_class = MainOrderSerializer

class MainOrderDetail(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    queryset = MainOrder.objects.all()
    serializer_class = MainOrderSerializer

class EditMainOrder(generics.UpdateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = MainOrder.objects.all()
    serializer_class = MainOrderSerializer

class DeleteMainOrder(generics.RetrieveDestroyAPIView):
    permission_classes = [IsAuthenticated]
    queryset = MainOrder.objects.all()
    serializer_class = MainOrderSerializer

class MainOrderList(generics.ListAPIView):
    serializer_class = MainOrderSerializer
    queryset = MainOrder.objects.all()

class MainOrderRUD(generics.RetrieveUpdateDestroyAPIView):
    queryset = MainOrder.objects.all()
    serializer_class = MainOrderSerializer