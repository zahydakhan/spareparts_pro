# Generated by Django 3.1.3 on 2020-11-10 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parts', '0005_auto_20201110_1737'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spareparts',
            name='description',
            field=models.TextField(blank=True, max_length=250, null=True),
        ),
        migrations.AlterField(
            model_name='spareparts',
            name='part_number',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='spareparts',
            name='vendor_name',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='spareparts',
            name='vendor_status',
            field=models.CharField(blank=True, choices=[('international', 'international'), ('local', 'local')], default='international', max_length=20, null=True),
        ),
    ]
