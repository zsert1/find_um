
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views
router=DefaultRouter()
router.register('post',views.PostViewSet) #2개의 URL을 만들어준다
urlpatterns = [
    path('',include(router.urls))
    # path('singup/',views.SingupView.as_view(),name="login"),
  

    # path('registration/', include('dj_rest_auth.registration.urls')),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
   
]
