import { useState } from 'react'

export function useTimer() {
  const [hasStarted, setHasStarted] = useState(false)
  const [seconds, setSeconds] = useState()
  const [timerIntervalId, setTimerIntervalId] = useState()
  const [paused, setPaused] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)
  const [timerName, setTimerName] = useState()

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

  const startTimer = (seconds, name) => {
    console.log(seconds)
    setHasStarted(true)
    setSeconds(seconds)
    setHasFinished(false)
    setTimerName(name)

    const intervalID = setInterval(decrementSeconds, 1000)
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
      className={`${
        hasFinished ? 'bg-timer_green' : 'bg-white'
      } border-2 border-green text-green text-md py-2 px-4 rounded-lg ml-10 mb-4 flex justify-between`}
      style={{ width: '160px' }}
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
            className="w-6"
            onClick={() => cancelTimer()}
          />
        </button>
      </div>
      <div>
        {!hasFinished ? (
          <>
            <span>
              {Math.floor(seconds / 60) < 10
                ? '0' + Math.floor(seconds / 60)
                : Math.floor(seconds / 60)}
              :
            </span>
            <span>
              {seconds % 60 < 10 ? '0' + (seconds % 60) : seconds % 60}
            </span>
          </>
        ) : (
          'Finished!'
        )}
      </div>
    </button>
  )

  return [Timer, startTimer, hasStarted, timerName, hasFinished]
}
