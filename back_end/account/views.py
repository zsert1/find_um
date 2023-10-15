from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from .serializers import SignupSerializer
class SingupView(CreateAPIView):
    model=get_user_model()
    serializer_class= SignupSerializer
    permission_classes=[
        AllowAny,
    ]
    pass