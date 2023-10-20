
from django.urls import include, path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('singup/',views.SingupView.as_view(),name="login"),
    path('registration/', include('dj_rest_auth.registration.urls')),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   
]
