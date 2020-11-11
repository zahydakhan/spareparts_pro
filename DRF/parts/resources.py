
from import_export import resources
from parts.models import SpareParts
 
class SparePartsResource(resources.ModelResource):
    class Meta:
        model = SpareParts
