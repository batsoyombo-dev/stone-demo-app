# Generated by Django 3.1.7 on 2021-03-16 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0006_auto_20210316_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='id',
            field=models.AutoField(editable=False, primary_key=True, serialize=False),
        ),
    ]