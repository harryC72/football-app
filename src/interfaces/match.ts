interface HomeTeam {
  id: number;
  name: string;
  wins: number;
  draws: number;
  losses: number;
}

interface AwayTeam {
  id: number;
  name: string;
  wins: number;
  draws: number;
  losses: number;
}

interface Season {
  startDate: string;
  endDate: string;
  currentMatchDay: 46;
}

export interface MatchModel {
  head2head: {
    homeTeam: HomeTeam;
    awayTeam: AwayTeam;
  };
  match: {
    id: number;
    status: string;
    competition: {
      id: number;
      name: string;
      area: {
        name: string;
      };
    };
  };
  season: Season;
}
