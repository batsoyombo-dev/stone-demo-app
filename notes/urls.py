# Other imports
from django.urls import path
# My imports
from . import views

urlpatterns = [
    path("get/", views.get_notes_view, name="get"),
    path("add/", views.add_note_view, name="add"),
    path("del/<int:pk>/", views.del_note_view, name="del"),
    path(r'upd/<int:pk>', views.upd_note_view, name="upd"),
    path("get/<int:pk>/", views.get_single_note_view, name="get_single")
]