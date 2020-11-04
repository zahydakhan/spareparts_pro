from django.db import models
from django.utils import timezone

# Create your models here.
class SpareParts(models.Model):

    class IntObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(vendor_status="international")

    options = (
        ('international', 'international'),
        ('local', 'local'),
    )
    part_number = models.CharField(max_length=20)
    description = models.TextField(max_length=250)
    vendor_name = models.CharField(max_length=20)
    vendor_status = models.CharField(max_length=20, choices=options, default="international")
    weight_kg = models.CharField(max_length=20, null=True, blank=True)
    machine = models.CharField(max_length=20, null=True, blank=True)
    model_number = models.CharField(max_length=20, null=True, blank=True)
    aud = models.DecimalField(max_digits=8, decimal_places=2)
    created_at =models.DateTimeField(default=timezone.now)
    objects = models.Manager()
    intObjects = IntObj()

    class Meta:
        ordering = ("-vendor_status",)

    def __str__(self):
        return self.part_number

class QuaryDetail(models.Model):

    class IntObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(vendor_status)

    class LocalObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(vendor_status)

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
    manager_name = models.CharField(max_length=20)
    manager_email = models.EmailField(max_length=50)
    manager_phone = models.CharField(max_length=10)
    supervisor_name = models.CharField(max_length=20)
    supervisor_email = models.EmailField(max_length=50)
    supervisor_phone = models.CharField(max_length=10)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.site

        