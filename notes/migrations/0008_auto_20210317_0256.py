# Generated by Django 3.1.7 on 2021-03-17 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0007_auto_20210316_1419'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notemodel',
            name='body',
            field=models.TextField(null=True),
        ),
    ]
