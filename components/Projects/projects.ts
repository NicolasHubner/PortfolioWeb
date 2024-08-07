export type ProjectType = {
  name: string;
  description: string;
  Language: string;
  image: string;
  link?: string;
  linkAndroid?: string;
  linkiOS?: string;
}

export const projects : ProjectType[] =[
  {
    name: 'Pontua',
    description: 'A simple Pontua app to help you keep track of your work progress.',
    Language: 'React Native, Unistyles, Unit Test, NestJs, TypeScript',
    image: '/apprecipes.png',
    link: 'https://github.com/pontua/pontua',
    linkiOS: 'https://apps.apple.com/br/app/pontua/id6503622178',
    linkAndroid: 'https://play.google.com/store/apps/details?id=com.pontua.pontuapp&hl=en_US&pli=1'
  },
]