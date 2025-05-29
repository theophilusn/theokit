```twig
  {% embed 'duchess:appointment-card' with {
    title: 'Your First Appointment',
    subtitle: 'We want you to be as comfortable as possible throughout your entire journey.',
    options: [
          {
            "label": "Begin Your Journey",
            "value": "begin",
            "link": "#",
            "selected": true
          },
          {
            "label": "Learn More",
            "value": "learn",
            "link": "#"
          }
        ]
    } %}
  {% endembed %}
```
