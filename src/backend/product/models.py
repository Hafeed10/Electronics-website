from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=200)
    final_price = models.DecimalField(max_digits=10, decimal_places=2)
    original_price = models.DecimalField(max_digits=10, decimal_places=2)
    info = models.TextField()
    brand = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    rate_count = models.PositiveIntegerField(default=5)
    quantity = models.PositiveIntegerField(default=1)
    image = models.ImageField(upload_to='products/', null=True, blank=True)

    def __str__(self):
        return self.name
