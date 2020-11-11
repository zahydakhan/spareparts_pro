from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Roller

# # Register your models here.
# @admin.register(SpareParts)
# class SparePartsAdmin(admin.ModelAdmin):
#     list_display = ('part_number', 'description', 'vendor_name', 'vendor_status', 'aud',)

@admin.register(Roller)
class RollerAdmin(ImportExportModelAdmin):
    list_display = ('description','roller_diameter', 'wall_thickness', 'roller_length', 'shaft_diameter', 'bearing','aud','usd','vendor_name','price',)
    pass