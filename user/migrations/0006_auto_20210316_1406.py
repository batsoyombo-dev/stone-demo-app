# Generated by Django 3.1.7 on 2021-03-16 14:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0005_auto_20210316_1352'),
    ]

    operations = [
        migrations.RenameField(
            model_name='customuser',
            old_name='user_id',
            new_name='id',
        ),
    ]