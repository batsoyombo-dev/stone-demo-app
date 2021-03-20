from rest_framework.response import Response

def is_authenticated(func):
    def wrapper(require, *args, **kwargs):
        if require.user.is_authenticated:
            return func(require, *args, **kwargs)
        else:
            return Response({ "message": "Unauthorized", "success": False })

    return wrapper