from django.db import models
from django.utils import timezone
import datetime

# Create your models here.

class SpareParts(models.Model):

    class IntObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(vendor_status="international")

    class GetObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(sp_type="ground engaging tools")

    class MnLinerObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(sp_type="manganese liners")

    class MpObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(sp_type="mechanical parts")

    options = (
        ('international', 'international'),
        ('local', 'local'),
    )

    types_options = (
        ('ground engaging tools', 'ground engaging tools'),
        ('manganese liners', 'manganese liners'),
        ('mechanical parts', 'mechanical parts'),
    )
    
    part_number = models.CharField(max_length=200, unique=True)
    description = models.TextField(max_length=250, null=True, blank=True)
    vendor_name = models.CharField(max_length=200, null=True, blank=True)
    vendor_status = models.CharField(max_length=200, choices=options, default="international", null=True, blank=True)
    sp_type = models.CharField(max_length=50, choices=types_options, default="mechanical parts", null=True, blank=True)
    weight_kg = models.CharField(max_length=20, null=True, blank=True)
    machine = models.CharField(max_length=50, null=True, blank=True)
    model_number = models.CharField(max_length=50, null=True, blank=True)
    aud = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    usd = models.DecimalField(max_digits=20, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=20, decimal_places=2,null=True, blank=True)
    created_at =models.DateTimeField(default=timezone.now)
    objects = models.Manager()
    intObjects = IntObj()
    GetObjects = GetObj()
    MnLinerObjects = MnLinerObj()
    MpObjects = MpObj()

    class Meta:
        ordering = ("-vendor_status",)

    def __str__(self):
        return str(self.part_number)

class SpareParts_two(models.Model):

    class IntObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(vendor_status="international")

    class GetObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(sp_type="ground engaging tools")

    class MnLinerObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(sp_type="manganese liners")

    class MpObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(sp_type="mechanical parts")

    options = (
        ('international', 'international'),
        ('local', 'local'),
    )

    types_options = (
        ('ground engaging tools', 'ground engaging tools'),
        ('manganese liners', 'manganese liners'),
        ('mechanical parts', 'mechanical parts'),
    )
    
    part_number = models.ForeignKey(SpareParts, on_delete=models.CASCADE, related_name='spare_parts')
    description = models.TextField(max_length=250, null=True, blank=True)
    vendor_name = models.CharField(max_length=20, null=True, blank=True)
    vendor_status = models.CharField(max_length=20, choices=options, default="international", null=True, blank=True)
    sp_type = models.CharField(max_length=50, choices=types_options, default="mechanical parts", null=True, blank=True)
    weight_kg = models.CharField(max_length=20, null=True, blank=True)
    machine = models.CharField(max_length=20, null=True, blank=True)
    model_number = models.CharField(max_length=20, null=True, blank=True)
    aud = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    usd = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2,null=True, blank=True)
    created_at =models.DateTimeField(default=timezone.now)
    objects = models.Manager()
    intObjects = IntObj()
    GetObjects = GetObj()
    MnLinerObjects = MnLinerObj()
    MpObjects = MpObj()

    class Meta:
        ordering = ("-vendor_status",)

    def __str__(self):
        return str(self.part_number)




   
class QuaryDetail(models.Model):

    options = (
        ('ACT', 'ACT'),
        ('QLD', 'QLD'),
        ('NSW', 'NSW'),
        ('SA', 'SA'),
        ('VIC', 'VIC'),
        ('TAS', 'TAS'),
    )
    site = models.CharField(max_length=20)
    address = models.TextField(max_length=250)
    state = models.CharField(max_length=10, choices=options, default="VIC")
    manager_name = models.CharField(max_length=20, null=True, blank=True)
    manager_email = models.EmailField(max_length=50, null=True, blank=True)
    manager_phone = models.CharField(max_length=10, null=True, blank=True)
    supervisor_name = models.CharField(max_length=20, null=True, blank=True)
    supervisor_email = models.EmailField(max_length=50, null=True, blank=True)
    supervisor_phone = models.CharField(max_length=10, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.site

class Order(models.Model):

    part_number = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(max_length=250, null=True, blank=True)
    vendor_name = models.CharField(max_length=20, null=True, blank=True)
    unit_price = models.DecimalField(max_digits=8, decimal_places=2,null=True, blank=True)
    quantity = models.IntegerField()
    total_price = models.DecimalField(max_digits=8, decimal_places=2,null=True, blank=True)
    pr_number = models.CharField(max_length=8, null=True, blank=True)
    line_number = models.IntegerField( null=True, blank=True)
    site_name = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
     

    def __str__(self):
        return str(self.pr_number)

class MainOrder(models.Model):

    part_number = models.CharField(max_length=50, null=True, blank=True)
    description = models.TextField(max_length=250, null=True, blank=True)
    vendor_name = models.CharField(max_length=20, null=True, blank=True)
    unit_price = models.DecimalField(max_digits=8, decimal_places=2,null=True, blank=True)
    quantity = models.IntegerField()
    total_price = models.DecimalField(max_digits=8, decimal_places=2,null=True, blank=True)
    pr_number = models.CharField(max_length=8, null=True, blank=True)
    line_number = models.IntegerField( null=True, blank=True)
    site_name = models.CharField(max_length=20, null=True, blank=True)
    month = models.CharField(max_length=50, null=True, blank=True)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return str(self.pr_number)


