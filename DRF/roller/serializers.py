from rest_framework import serializers
from . import models

class RollerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Roller
        fields = '__all__'