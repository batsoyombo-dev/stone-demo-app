from rest_framework import serializers
from .models import CustomUser

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["username", "email", "password"]

    def save(self):
        user = CustomUser.objects.create_user(username=self.validated_data["username"], email=self.validated_data["email"], password=self.validated_data["password"])
        user.save()