# Other imports
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
# My imports
from user.models import CustomUser
from .models import NoteModel
from .serializer import NoteSerializer, NoteWithoutBodySerializer
from .decorators import is_authenticated
# Create your views here.

@api_view(["GET"])
@is_authenticated
def get_notes_view(request):
    user = CustomUser.objects.get(id=request.user.id)
    notes = user.notemodel_set.all()
    notes = NoteWithoutBodySerializer(notes, many=True)
    return Response(notes.data)

@api_view(["GET"])
@is_authenticated
def get_single_note_view(request, pk):
    user = CustomUser.objects.get(id=request.user.id)
    note = user.notemodel_set.filter(id=pk)
    if note.exists():
        print(len(note))
        return Response({"note": {"title": note[0].title, "body": note[0].body, "id": note[0].id }, "success": True})
    else:
        return Response({ "message": "Note does not exist", "success": False })

@api_view(["POST"])
@is_authenticated
def add_note_view(request):
    user = CustomUser.objects.get(id=request.user.id)
    note = NoteSerializer(data=request.data)
    if note.is_valid():
        note = user.notemodel_set.create(title=request.data["title"], body=request.data["body"])
        note = NoteWithoutBodySerializer(note, many=False)
        return Response({ "note": note.data, "success": True })
    else:
        return Response({ "message": "Invalid input", "success": False })

@api_view(["DELETE"])
def del_note_view(request, pk):
    user = CustomUser.objects.get(id=request.user.id)
    note = user.notemodel_set.filter(id=pk)
    if not note:
        return Response({ "message": "Note does not exist", "success": False })
    else: 
        note.delete()
        return Response({ "success:": True })

@api_view(["PUT"])
def upd_note_view(request, pk):
    user = CustomUser.objects.get(id=request.user.id)
    note = user.notemodel_set.filter(id=pk)

    if not note:
        return Response({ "message": "Note does not exist", "success": False })
    
    upd_field = {}
    if "title" in request.data:
        upd_field["title"] = request.data["title"]
    if "body" in request.data:
        upd_field["body"] = request.data["body"]

    if upd_field:
        note.update(**upd_field)
        return Response({ "success": True })
    else: 
        return Response({ "message": "Invalid input", "success": False })

