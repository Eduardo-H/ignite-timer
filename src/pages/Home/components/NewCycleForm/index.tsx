import { useFormContext } from 'react-hook-form'

import { useCycles } from '../../../../hooks/useCycles'

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

export function NewCycleForm() {
  const { activeCycle } = useCycles()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">I am going to work in</label>
      <TaskInput
        type="text"
        id="task"
        list="task-suggestions"
        placeholder="Give a name for your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="React project" />
        <option value="Next.js project" />
        <option value="Node.js project" />
        <option value="Mobile project" />
        <option value="Electron project" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        step={5}
        min={5}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
