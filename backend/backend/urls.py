
from django.contrib import admin
from django.urls import path,include
from app1.views import StudentView
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('student',StudentView,basename='student')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('v1/',include(router.urls)),
    
]
