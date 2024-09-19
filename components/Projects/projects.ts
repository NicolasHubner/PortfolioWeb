export type ProjectType = {
  name: string;
  description: string;
  Language: string;
  image: string;
  link?: string;
  linkAndroid?: string;
  linkAndroid2?: string;
  linkiOS?: string;
}

export const projects : ProjectType[] =[
  {
    name: 'Pontua',
    description: 'A simple Pontua app to help you keep track of your work progress.',
    Language: 'React Native, TypeScript, Remix, NestJs, ElasticSearch and AWS ',
    image: '/pontua.png',
    link: 'https://pontua.com.br/',
    linkiOS: 'https://apps.apple.com/br/app/pontua/id6503622178',
    linkAndroid: 'https://play.google.com/store/apps/details?id=com.pontua.pontuapp&hl=en_US&pli=1'
  },
  {
    name: 'Company Field Solution',
    image:'/cfs.webp',
    description: 'A complex Company Field Solution to manage your company.',
    Language: 'React Native, TypeScript, Remix, NestJs, PostGress, AWS, C#, Python, Kotlin and MySQL',
    linkAndroid: 'https://play.google.com/store/apps/details?id=com.cfschat.android&hl=en', //CFS CHAT
    linkAndroid2: 'https://play.google.com/store/apps/details?id=com.qodework.cfs&hl=en', //CFS
  },
  {
    name: 'CrossLife',
    description: 'Welcome to CrossLifers, an application created especially to track and enhance your progress in the fitness world.',
    image: '/crosslife.webp',
    linkAndroid: 'https://play.google.com/store/apps/details?id=com.anonymous.CrossLife&hl=en',
    linkiOS: 'https://apps.apple.com/br/app/crosslifers/id6447020889',
    Language: 'React Native, TypeScript, Node, Express and MongoDB'
  },
  {
    name: 'TrouwApp',
    description: 'Trouw Tecnologia for Mobility, Visibility and Risk Management is focused on developing solutions for logistics, bringing the best experience for managing your company\'s deliveries and collections.',
    image: '/trouw.jpeg',
    linkAndroid: 'https://play.google.com/store/apps/details?id=com.trouwapp&hl=en',
    linkiOS: 'https://apps.apple.com/br/app/trouw-tecnologia/id6444321363?l=en-GB',
    Language: 'React Native, TypeScript, Node, Express and MongoDB'
  }
]