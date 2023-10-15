# find_um
우산 찾기 토이프로젝트

## 백엔드 작업
 10-15
 - account 앱 생성
 - pip install "djangorestframework~=3.11.0" 설치
  - root 앱 urls에   
    `path('api-auth/',include('rest_framework.urls') ),
     path('account/',include('account.urls') ),` 
     추가
 - root 앱 settings.py에 INSTALLED_APPS 리스트에   
    ` 'rest_framework',
     'account',` 
     추가
 - account 앱 views에 SingupView 클래스 생성
 - account 앱에 serializers.py 생성 후 SignupSerializer 클래스 생성
 - from rest_framework import serializers
   django.contrib.auth 에서 userModel import
   User=get_user_model()
-  DB에서 읽어 오지 않고 쓰기전용
  ` password=serializers.CharField(write_only=True)`
-  패스워드 암호화 적용
`user.set_password(validated_data['password'])`  
- account 앱 urls에 urlpatterns에  path singup/ 추가 