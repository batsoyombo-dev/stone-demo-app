from rest_framework.response import Response
from .serializers import UserSerializer

def if_authenticated_then_do_nothing(func):
    def wrapper(request, *args, **kwargs):
        if request.user.is_authenticated:
            user = { "username": request.user.username, "email": request.user.email }
            res = { "user": user, "success": True }
            return Response(res)
        else:
            return func(request, *args, **kwargs)
    
    return wrapper