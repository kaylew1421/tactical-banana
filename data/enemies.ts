export interface Enemy {
  codename: string;
  threat: string;
  description: string;
  icon: 'squirrel' | 'cat' | 'robot';
}

export const enemiesData: Enemy[] = [
  {
    codename: 'General Fluffytail',
    threat: 'NUTS',
    description: 'A squirrel mastermind known for strategic acorn theft and taunting maneuvers from high-ground positions.',
    icon: 'squirrel',
  },
  {
    codename: 'Agent Meow',
    threat: 'CATASTROPHIC',
    description: 'A feline operative specializing in counter-surveillance and psychological warfare (i.e., knocking things off shelves).',
    icon: 'cat',
  },
  {
    codename: 'The Vac-U-Bot 9000',
    threat: 'SUCKS',
    description: 'An autonomous cleaning drone with a ruthless efficiency for consuming small objects. Suspected of intelligence gathering.',
    icon: 'robot',
  },
];
