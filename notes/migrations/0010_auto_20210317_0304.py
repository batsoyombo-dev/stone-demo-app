# Generated by Django 3.1.7 on 2021-03-17 03:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0009_auto_20210317_0258'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notemodel',
            name='body',
            field=models.TextField(blank=True, null=True),
        ),
    ]
