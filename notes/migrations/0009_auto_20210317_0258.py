# Generated by Django 3.1.7 on 2021-03-17 02:58

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('notes', '0008_auto_20210317_0256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notemodel',
            name='body',
            field=models.TextField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
