export const loginForm = [
  {
    $el: 'h1',
    children: 'Вход'
  },
  {
    $formkit: 'text',
    name: "email",
    label: "Email",
    validation: 'required|email'
  },
  {
    $formkit: 'text',
    name: "text",
    label: "Text",
    validation: 'required'
  },
  {
    $formkit: 'password',
    name: "password",
    label: "Пароль",
    validation: 'required|length:8,255'
  },
  {
    $formkit: 'password',
    name: "password_confirm",
    label: "Подтвердите пароль",
    validation: 'required|confirm'
  },
]