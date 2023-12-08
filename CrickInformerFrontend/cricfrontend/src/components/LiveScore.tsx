import React from 'react'
import CricCardSmall from './CricCard/CricCardSmall';
import { useLivematchesQuery,useAllmatchesQuery,useGetpointstableQuery } from '../services/scoresApi';
const LiveScore: React.FC = () => {
    return (
    <div>
    <CricCardSmall/>
    </div>
  )
}

export default LiveScore;