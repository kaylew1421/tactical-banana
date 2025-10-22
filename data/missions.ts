
export interface Mission {
  title: string;
  status: string;
  description:string;
  coords: { top: string; left: string };
}

export const missionsData: Mission[] = [
  {
    title: 'Operation: Lawn Order',
    status: 'SUCCESS',
    description: 'Neutralized an aggressive outbreak of dandelions threatening suburban tranquility. HOA commendation received.',
    coords: { top: '35%', left: '22%' }, // North America
  },
  {
    title: 'The Great Fridge Heist',
    status: 'SUCCESS',
    description: 'Successfully infiltrated a high-security kitchen quadrant after hours to secure a leftover slice of pizza. Zero casualties.',
    coords: { top: '38%', left: '25%' }, // North America (close by)
  },
  {
    title: 'Project Chimichanga',
    status: 'COMPLETE',
    description: 'Secured vital intel from a local Tex-Mex establishment. Guacamole was extra, but deemed essential to operational success.',
    coords: { top: '65%', left: '30%' }, // South America
  },
  {
    title: 'Episode IV: A New Remote',
    status: 'SUCCESS',
    description: 'Located and retrieved the missing TV remote from its fortified position within the sofa cushions. Peace was restored to the living room.',
    coords: { top: '30%', left: '52%' }, // Europe
  },
];
