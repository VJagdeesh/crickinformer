export interface livematch{
    "matchId": number,
    "teamHeading": string,
    "matchNumberVenue": string,
    "battingTeam": string,
    "battingTeamScore": string,
    "bowlTeam": string,
    "bowlTeamScore": string,
    "liveText": string,
    "matchLink": string,
    "textComplete": string,
    "status": string,
    "date": string
}


interface TeamStats {
    Teams: string;
    Mat: string;
    Won: string;
    Lost: string;
    Tied: string;
    NR: string;
    Pts: string;
    NRR: string;
    // Add other properties as needed based on your actual data
  }
  
export type liveScoreApiResponse = TeamStats[];