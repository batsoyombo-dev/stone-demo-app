# Other imports
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from .decorators import if_authenticated_then_do_nothing
# My imports
from .serializers import UserSerializer

# Create your views here.
@api_view(["POST"])
@if_authenticated_then_do_nothing
def register_view(request):
    user_data = request.data
    user = UserSerializer(data=user_data)
    if user.is_valid():
        user.save()
        return Response({ "user": { "username": user.data["username"], "email": user.data["email"] }, "success": True })
    else:
        return Response({ "message": "Data is not valid", "success": False })

@api_view(["POST"])
@if_authenticated_then_do_nothing
def login_view(request):
    user_data = request.data

    if "password" not in user_data or "email" not in user_data:
        return Response({ "message": "Fill all the fields!", "success": False })

    user = authenticate(request, username=user_data["email"], password=user_data["password"])

    if user is not None:
        login(request, user)
        user = { "username": request.user.username, "email": request.user.email }
        return Response({ "user": user, "success": True })
    else:
        return Response({ "message": "Invalid email or password" ,"success": False })

@api_view(["GET"])
def logout_view(request):
    logout(request)
    res = { "success": True }
    return Response(res)
