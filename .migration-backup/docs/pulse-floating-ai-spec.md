# Floating AI Spec — Pulse

A floating AI assistant named **Pulse** is mandatory on every page of the demo app.

## Pages

Landing, Dashboard, Projects, Project detail, Project Pulse, Tasks, Approvals, Reports, Settings.

## Source files

```text
demo-data/pulse-ai-demo-dialogues.json
design/reference-ui/images/Floating Pulse.png
```

## Required behavior

1. Collapsed floating orb/button.
2. Expanded premium glass panel.
3. Suggested questions.
4. Scripted demo answers.
5. English + Arabic.
6. RTL support in Arabic.
7. Dark/light support.
8. Route-aware suggestions.
9. Logical positioning using `inset-inline-end`; avoid hardcoded right/left.
10. No real LLM API in the first demo.

## Minimum demo questions

English:
- What is the current risk level of Al Reem Tower?
- Why is the project delayed?
- What should I do today?
- Which approvals are blocking progress?
- Summarize the latest site visit.
- Draft a client update.

Arabic:
- ما مستوى الخطر الحالي في برج الريم؟
- لماذا المشروع متأخر؟
- ماذا يجب أن أفعل اليوم؟
- ما الاعتمادات التي تعطل التقدم؟
- لخص آخر زيارة موقع أو اجتماع تنسيقي.
- اكتب تحديثاً مختصراً للعميل.
