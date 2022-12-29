import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>My history</h1>

      <HistoryList>
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
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="yellow">Active</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Incomplete</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
