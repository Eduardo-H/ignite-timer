import { formatDistanceToNow } from 'date-fns'
import { useCycles } from '../../hooks/useCycles'
import {
  EmptyCyclesContainer,
  HistoryContainer,
  HistoryList,
  Status,
} from './styles'

export function History() {
  const { cycles } = useCycles()

  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
        {cycles.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>When</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Status statusColor="green">Completed</Status>
                    )}

                    {cycle.interruptedDate && (
                      <Status statusColor="red">Interrupted</Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Status statusColor="yellow">Active</Status>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <EmptyCyclesContainer>
            <p>No cycles created</p>
          </EmptyCyclesContainer>
        )}
      </HistoryList>
    </HistoryContainer>
  )
}
