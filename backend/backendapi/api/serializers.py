from django.contrib.auth.models import User
from django.db import transaction
from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import Student


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ('firstName', 'lastName', 'institution', 'progress')


class UserSerializer(serializers.ModelSerializer):
    student = StudentSerializer()
 
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'student')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    @transaction.atomic
    def create(self, validated_data):
        person_data = validated_data.pop('student')
        user = User.objects.create_user(**validated_data)
        user.student = Student.objects.create(user=user, **person_data)
        user.save()

        Token.objects.create(user=user)
        return user
