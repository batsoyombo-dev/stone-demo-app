from django.db import models
from django.contrib.auth.models import AbstractUser
from uuid import uuid4

# Create your models here.
class CustomUser(AbstractUser):
    id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=40, unique=False, null=False, blank=False, default="Anonymous")
    email = models.EmailField(unique=True, null=False, blank=False)

    REQUIRED_FIELDS = ["username"]
    USERNAME_FIELD = "email"
