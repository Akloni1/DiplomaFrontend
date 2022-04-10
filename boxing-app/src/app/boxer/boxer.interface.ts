export interface IBoxer {
  boxerId: number;
  boxingClubId: number;
  coachId: number;
  dateOfBirth: Date;
  weight: number;
  discharge: string;
  firstName: string;
  lastName: string;
  middleName: string;
  numberOfFightsHeld: number;
  numberOfWins: number;
  trainingExperience: number;
  login: string;
  password?: string;
  role:string;
}
