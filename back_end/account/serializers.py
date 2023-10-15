from rest_framework import serializers
from django.contrib.auth import get_user_model

User=get_user_model()

class SignupSerializer(serializers.ModelSerializer):
    # DB에서 읽어 오지 않고 쓰기전용
    password=serializers.CharField(write_only=True)
    def create(self,validated_data):
        user=User.objects.create(username=validated_data['username'])
        #암호화 적용
        user.set_password(validated_data['password'])
        user.save()
        return user
      
    
    
    class Meta:
        model=User
        fields=["pk","username","password"]