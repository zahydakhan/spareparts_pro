from rest_framework import serializers
from .models import SpareParts, SpareParts_two, QuaryDetail, Order, MainOrder


class SparePartsTwoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpareParts_two
        fields = '__all__'

class SparePartsSerializer(serializers.ModelSerializer):
    spare_parts = SparePartsTwoSerializer( many=True, read_only=True)
    class Meta:
        model = SpareParts
        fields = '__all__'

class QuaryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuaryDetail
        fields = '__all__'

class OrdersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'

class MainOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainOrder
        fields = '__all__'


