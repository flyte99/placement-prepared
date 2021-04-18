from django.contrib.auth.models import User
from rest_framework import viewsets, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Student
from .serializers import UserSerializer, StudentSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class GetAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(GetAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        user_serializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user': user_serializer.data})


@api_view(['POST'])
def update_student_progress(request):
    try:
        user = User.objects.get(auth_token=request.data['token'])
        student = Student.objects.get(user=user)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)

    data = StudentSerializer(student, many=False).data
    data['progress'][request.data['page']] = request.data['completed']

    serializer = StudentSerializer(student, data=data, context={'request': request})

    if serializer.is_valid():
        serializer.save()
        return Response(status=status.HTTP_200_OK, data=serializer.data['progress'])
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
