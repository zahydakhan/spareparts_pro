from django.db import models
from django.utils import timezone

# Create your models here.
class Roller(models.Model):

    class DesObj(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(description="Steel Trough Roller")

    options = (
        ('Steel Trough Roller', 'Steel Trough Roller'),
        ('Steel Return Roller', 'Steel Return Roller'),
        ('HDPE Trough Roller', 'HDPE Trough Roller'),
        ('HDPE Return Roller', 'HDPE Return Roller'),
        ('Impact Roller', 'Impact Roller'),
    )
    description = models.TextField(max_length=50, choices=options, default="Steel Trough Roller", null=True, blank=True)
    roller_diameter = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    wall_thickness = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    roller_length = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    shaft_diameter = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    bearing = models.CharField(max_length=20, null=True, blank=True)
    aud = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    usd = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    vendor_name = models.CharField(max_length=20, null=True, blank=True)
    price = models.DecimalField(max_digits=8, decimal_places=2,null=True, blank=True)
    created_at =models.DateTimeField(default=timezone.now)
    objects = models.Manager()
    desObjects = DesObj()

    class Meta:
        ordering = ("-description",)

    def __str__(self):
        return self.description