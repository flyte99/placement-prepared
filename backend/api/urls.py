from django.conf.urls import include
from django.urls import path
from rest_framework import routers

from .views import UserViewSet, GetAuthToken, update_student_progress, update_student_score

router = routers.DefaultRouter()
router.register('users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', GetAuthToken.as_view()),
    path('update-progress/', update_student_progress),
    path('update-score/', update_student_score)
]
