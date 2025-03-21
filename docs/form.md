## Introduction

`rn-base-project-expo` includes `react-hook-form` pre-installed for seamless form handling. This guide will walk you through implementing a form with specific focus on:

1. How to use `Form` component.
2. Displaying a view between two inputs.
3. Placing multiple inputs on the same line.

---

## 1. How to use `Form` component

First, define which inputs the form will need into a constant like this

```tsx
export const SIGNIN_FIELDS: IFormField<IUserSignInPayload>[] = [
  {
    key: 'email',
    label: 'auth.email',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    disabled: false,
    componentProps: {
      autoCapitalize: 'none',
    },
  },
  {
    key: 'password',
    label: 'auth.password',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    disabled: false,
    componentProps: {
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
  },
]
```

In above constant, `fieldType` is the type of the input, `componentProps` is its corresponding props.

Next, add `useForm` hook and render the form inside component.

```tsx
const {control, handleSubmit} = useForm<IUserSignInPayload>({
  defaultValues: {},
  mode: 'onChange',
  resolver: zodResolver(SignInSchema),
})

return (
  <View style={styles.container}>
    <Form<IUserSignInPayload> fields={SIGNIN_FIELDS} control={control} />
    <ButtonPrimary onPress={() => handleSubmit(onSubmit)()}>{getString('auth.signIn')}</ButtonPrimary>
  </View>
)
```

Then, you're good to go.

---

## 2. Adding a view between two inputs

Sometimes, you might want to display an element between two input fields. Here’s how you can do it:

First, create your view or component which should have below following interface:

```typescript
import {Control, Path, useWatch} from 'react-hook-form'

interface IProps<T extends object> {
  control: Control<T>
}

const MiddleView = <T extends object>({control}: IProps<T>) => {
  const watchingValue = useWatch({
    control,
    name: 'actual_field_name' as Path<T>,
  })
}
```

Next, define an additional object between the two inputs with `fieldType` as `FIELD_TYPES.custom`, then put your view or component to the `CustomComponent` prop of the object like this

```tsx
export const SIGNIN_FIELDS: IFormField<IUserSignInPayload>[] = [
  {
    key: 'email',
    label: 'auth.email',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    disabled: false,
    componentProps: {
      autoCapitalize: 'none',
    },
  },
  {
    key: 'filler',
    label: '',
    fieldType: FIELD_TYPES.custom,
    CustomComponent: MiddleView,
  },
  {
    key: 'password',
    label: 'auth.password',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    disabled: false,
    componentProps: {
      secureTextEntry: true,
      autoCapitalize: 'none',
    },
  },
]
```

This will display the `MiddleView` component between the two inputs.

---

## 3. Placing multiple inputs on the same line

To align two inputs in the same row, use `{flexDirection: 'row', flexWrap: 'wrap'}` inside our `Form`'s parent view:

```tsx
<View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
  <Form<IUserSignInPayload> fields={SIGNIN_FIELDS} control={control} />
</View>
```

Then, remember to adjust the input width based on your requirements inside the field constant:

```tsx
export const SIGNIN_FIELDS: IFormField<IUserSignInPayload>[] = [
  {
    key: 'email',
    label: 'auth.email',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    disabled: false,
    componentProps: {
      autoCapitalize: 'none',
      containerStyle: {{
          flex: 1,
      }}
    },
  },
  {
    key: 'password',
    label: 'auth.password',
    fieldType: FIELD_TYPES.input,
    isRequire: true,
    disabled: false,
    componentProps: {
      secureTextEntry: true,
      autoCapitalize: 'none',
      containerStyle: {{
          flex: 1,
      }}
    },
  },
]
```

---
