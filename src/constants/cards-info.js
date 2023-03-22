import { v4 } from "uuid"

export const CARDS_INFO = [
    {
        id:v4(),
        icon: './public/images/icon-supervisor.svg',
        title:'Supervisor',
        data:'Monitors activity to identify project roadblocks'
    },
    {
        id:v4(),
        icon: './public/images/icon-team-builder.svg',
        title:'Team Builder',
        data:'Scans our talent network to create the optimal team for your project'
    },
    {
        id:v4(),
        icon: './public/images/icon-karma.svg',
        title:'Karma',
        data:'Regularly evaluates our talent to ensure quality'
    },
    {
        id:v4(),
        icon: './public/images/icon-calculator.svg',
        title:'Calculator',
        data:'Uses data from past projects to provide better delivery estimates'
    }
]