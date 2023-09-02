import React from 'react'
import ReactDOM from 'react-dom'

import Chord from '@tombatossals/react-chords/lib/Chord'

const MyChord = () => {
    const chord = {
        frets: [1, 3, 3, 2, 1, 1],
        fingers: [1, 3, 4, 2, 1, 1],
        barres: [1],
        capo: false,
    }
    const instrument = {
        strings: 6,
        fretsOnChord: 4,
        name: 'Guitar',
        keys: [],
        tunings: {
            standard: ['E', 'A', 'D', 'G', 'B', 'E']
        }
    }
    const lite = false // defaults to false if omitted
    return (
        <Chord
            chord={chord}
            instrument={instrument}
            lite={lite}
        />
    )
}

ReactDOM.render(
  <MyChord />,
  document.getElementById('root')
);
