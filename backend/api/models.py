from django.contrib.auth.models import User
from django.db import models


def pages():
    return {
        'cvs_and_cover_letters': False,
        'cv': False,
        'cover_letters': False,
        'linkedin': False,
        'psychometric_testing': False,
        'situational_judgement': False,
        'personality_assessments': False,
        'assessment_centres': False,
        'group_exercises': False,
        'virtual_assessment_centres': False,
        'presentations': False,
        'interviews': False,
        'telephone_interviews': False,
        'video_interviews': False,
        'face_to_face_interviews': False,
        'agile_development': False,
        'git': False,
        'mysql': False,
        'unit_testing': False,
    }


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student')
    firstName = models.CharField(max_length=50)
    lastName = models.CharField(max_length=50)
    institution = models.CharField(max_length=100)
    progress = models.JSONField(default=pages)
