import { computed } from '@vue/composition-api'
import { User } from 'src/models/User'

export default function useForm(
  props: {
    value: []
    users: Array<User>
  },
  emit: (arg0: string, arg1: never[]) => void
) {
  const removeUser = (id: number) => {
    emit('input', [...props.value.filter((j) => j !== id)])
  }
  const userSelected = computed(() => {
    return props.value.map((id) => props.users.find((user) => user.id === id))
  })
  return {
    removeUser,
    userSelected,
  }
}
