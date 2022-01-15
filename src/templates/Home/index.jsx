import { Button } from "../../components/Button"
import { Heading } from "../../components/Heading"
import { useCounterContext } from "../../context/CounterContext"

export const Home = () => {
  const [state, actions] = useCounterContext()

  const handleError = () => {
    actions.current
      .asyncError()
      .then((r) => console.log(r))
      .catch((e) => console.log(e.message))
  }

  return (
    <div>
      <Heading>Counter: {state.counter}</Heading>
      <div>
        <Button handleClick={actions.current.decrease}>Decrease</Button>
        <Button handleClick={actions.current.increase}>Increase</Button>
        <Button handleClick={actions.current.reset}>Reset</Button>
        <Button
          handleClick={() => {
            actions.current.setCounter({ counter: 10 })
          }}
        >
          SET 10
        </Button>
        <Button
          handleClick={() => {
            actions.current.setCounter({ counter: 100 })
          }}
        >
          SET 100
        </Button>

        <Button disabled={state.loading} handleClick={actions.current.asyncIncrease}>
          Increase async
        </Button>
        <Button disabled={state.loading} handleClick={handleError}>
          Error async
        </Button>
      </div>
    </div>
  )
}
