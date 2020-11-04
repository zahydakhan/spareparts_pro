from rest_framework import serializers
from . import models

class SparePartsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.SpareParts
        fields = '__all__'

class QuaryDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.QuaryDetail
        fields = '__all__'


