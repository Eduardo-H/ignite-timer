import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="task">I am going to work in</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Give a name for your project"
            list="task-suggestions"
          />

          <datalist id="task-suggestions">
            <option value="React project" />
            <option value="Next.js project" />
            <option value="Node.js project" />
            <option value="Mobile project" />
            <option value="PC project" />
          </datalist>

          <label htmlFor="minutesAmount">for</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />

          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>

          <Separator>:</Separator>

          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
