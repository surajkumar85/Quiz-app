from django.db import models
import random
# Create your models here.
DIFF_CHOICES = (
    ('easy','easy'),
    ('medium','medium'),
    ('hard','hard'),
)

class Quiz(models.Model):
    name = models.CharField(max_length=120)
    topic = models.CharField(max_length=120)
    no_of_questions = models.IntegerField()
    time = models.IntegerField(help_text='durations of the quiz in minuits')
    required_score_to_pass = models.IntegerField(help_text='required marks to pass')
    difficulty = models.CharField(max_length=6,choices=DIFF_CHOICES)

    def __str__(self):
        return f'{self.name}-{self.topic}'

    def get_questions(self):
        questions = list(self.questions.all())
        random.shuffle(questions)
        return questions[:self.no_of_questions]

    class Meta:
        verbose_name_plural = 'Quizes'