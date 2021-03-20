# Other imports
from rest_framework import serializers
# My imports
from .models import NoteModel

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteModel
        exclude = [ "user_id" ]

class NoteWithoutBodySerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteModel
        exclude = [ "user_id", "body" ]