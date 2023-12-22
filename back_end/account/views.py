from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
# from .serializers import PostSerializer
from .models import Post
from .serializers import SignupSerializer
class SingupView(CreateAPIView):
    model=get_user_model()
    serializer_class= SignupSerializer
    permission_classes=[
        AllowAny,
    ]
    pass
# class PostViewSet(ModelViewSet):
#     queryset=Post.objects.all()
#     serializer_class=PostSerializer

#     def dispatch(self, request, *args, **kwargs):
#         print("request.body",request.body)
#         print("request.POST",request.POST)
#         return super().dispatch(request, *args, **kwargs)