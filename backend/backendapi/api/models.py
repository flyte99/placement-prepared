from django.contrib.auth.models import User
from django.db import models


def pages():
    return [
        {'page': 'cvs_and_cover_letters', 'completed': False},
        {'page': 'cv', 'completed': False},
        {'page': 'cover_letters', 'completed': False},
        {'page': 'linkedin', 'completed': False},
        {'page': 'psychometric_testing', 'completed': False},
        {'page': 'situational_judgement', 'completed': False},
        {'page': 'personality_assessments', 'completed': False},
        {'page': 'assessment_centres', 'completed': False},
        {'page': 'group_exercises', 'completed': False},
        {'page': 'virtual_assessment_centres', 'completed': False},
        {'page': 'presentations', 'completed': False},
        {'page': 'interviews', 'completed': False},
        {'page': 'telephone_interviews', 'completed': False},
        {'page': 'video_interviews', 'completed': False},
        {'page': 'face_to_face_interviews', 'completed': False},
        {'page': 'agile_development', 'completed': False},
        {'page': 'git', 'completed': False},
        {'page': 'mysql', 'completed': False},
        {'page': 'unit_testing', 'completed': False},
    ]


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student')
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    institution = models.CharField(max_length=100)
    progress = models.JSONField(default=pages)
