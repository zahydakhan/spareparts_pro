from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import SpareParts, QuaryDetail, SpareParts_two, Order, MainOrder

# # Register your models here.
# @admin.register(SpareParts)
# class SparePartsAdmin(admin.ModelAdmin):
#     list_display = ('part_number', 'description', 'vendor_name', 'vendor_status', 'aud',)

@admin.register(QuaryDetail)
class QuaryAdmin(admin.ModelAdmin):
    list_display = ('id','state', 'manager_name', 'supervisor_name',)

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id','part_number', 'description', 'vendor_name', 'unit_price', 'quantity', 'total_price', 'pr_number', 'line_number', 'site_name',)

@admin.register(MainOrder)
class MainOrderAdmin(admin.ModelAdmin):
    list_display = ('id','part_number', 'description', 'vendor_name', 'unit_price', 'quantity', 'total_price', 'pr_number', 'line_number', 'site_name', 'month',)

@admin.register(SpareParts)
class SparePartsAdmin(ImportExportModelAdmin):
    list_display = ('id', 'part_number', 'description', 'vendor_name', 'vendor_status', 'sp_type', 'weight_kg','machine','model_number','aud','usd','price',)
    pass

@admin.register(SpareParts_two)
class SparePartsTwoAdmin(ImportExportModelAdmin):
    list_display = ('id','part_number', 'description', 'vendor_name', 'vendor_status', 'sp_type', 'weight_kg','machine','model_number','aud','usd','price',)
    pass