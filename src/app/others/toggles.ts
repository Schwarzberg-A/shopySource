export const toggles: Array<Toggles> = [
  {
    label: 'Показать все',
    value: 'none'
  },
  {
    label: 'В наличии',
    value: 'available'
  },
  {
    label: 'Со скидкой',
    value: 'actionPrice'
  },
]

export interface Toggles {
  label: string
  value: string
}