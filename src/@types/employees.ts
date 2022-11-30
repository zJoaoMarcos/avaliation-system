export interface Employee {
  name: string;
  email: string;
  department: string;
  ratings: [
    {
      whoVoted: string;
    }
  ];
}
