from django.contrib import admin
from .models import SpareParts, QuaryDetail

# Register your models here.
@admin.register(SpareParts)
class SparePartsAdmin(admin.ModelAdmin):
    list_display = ('part_number', 'description', 'vendor_name', 'vendor_status', 'aud',)

@admin.register(QuaryDetail)
class QuaryAdmin(admin.ModelAdmin):
    list_display = ('id','state', 'manager_name', 'supervisor_name',)