import { useState } from 'react'
import { XCircleIcon, PlayIcon } from '@primer/octicons-react'

export function useTimer() {
  const [hasStarted, setHasStarted] = useState(false)
  const [seconds, setSeconds] = useState()
  const [timerIntervalId, setTimerIntervalId] = useState()
  const [paused, setPaused] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  const decrementSeconds = () => {
    setSeconds((curr) => {
      if (curr > 0) {
        return curr - 1
      }
      if (curr === 0) {
        setHasFinished(true)
        return 0
      }
    })
  }

  const startTimer = (seconds) => {
    console.log(seconds)
    setHasStarted(true)
    setSeconds(seconds)
    setHasFinished(false)

    const intervalID = setInterval(decrementSeconds, 1000)
    console.log('interval ID: ', intervalID)
    setTimerIntervalId(intervalID)
  }

  const pauseTimer = () => {
    clearInterval(timerIntervalId)
    setPaused(true)
  }

  const resumeTimer = () => {
    setPaused(false)
    const intervalID = setInterval(decrementSeconds, 1000)
    setTimerIntervalId(intervalID)
  }

  const cancelTimer = () => {
    setHasStarted(false)
    clearInterval(timerIntervalId)
    setPaused(false)
  }

  const Timer = (
    <button
      className="bg-white border-2 border-green text-green text-md py-2 px-6 rounded-lg ml-10 mb-2 mt-2 flex justify-between"
      style={{ width: '200px' }}
      disabled
    >
      <div className="flex">
        {!paused && !hasFinished ? (
          <button>
            <img
              src="/pause.svg"
              alt="pause"
              className="w-6 mr-2"
              onClick={() => pauseTimer()}
            />
          </button>
        ) : (
          !hasFinished && (
            <button>
              <img
                src="/play.svg"
                alt="play"
                className="w-6 mr-2"
                onClick={() => resumeTimer()}
              />
            </button>
          )
        )}
        <button>
          <img
            src="/cancel-timer.svg"
            alt="cancel"
            className="w-6 mr-2"
            onClick={() => cancelTimer()}
          />
        </button>
        <span className="mr-4">Timer</span>
      </div>
      <div style={{ width: '30px' }}>
        <span>
          {Math.floor(seconds / 60) < 10
            ? '0' + Math.floor(seconds / 60)
            : Math.floor(seconds / 60)}
          :
        </span>
        <span>{seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60}</span>
      </div>
    </button>
  )

  return [Timer, startTimer, pauseTimer, cancelTimer, hasStarted]
}
