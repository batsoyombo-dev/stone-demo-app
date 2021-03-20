from django.db import models
from user.models import CustomUser
from uuid import uuid4
# Create your models here.

class BaseModel(models.Model):
    created = models.DateField(auto_now_add=True, editable=False)
    modified = models.DateField(auto_now=True)
    class Meta:
        abstract = True

class NoteModel(BaseModel):
    id = models.AutoField(primary_key=True, editable=False)
    user_id = models.ForeignKey(CustomUser, to_field="id", on_delete=models.CASCADE)
    title = models.CharField(max_length=50, null=False, blank=False)
    body = models.TextField(null=True, blank=True)
    