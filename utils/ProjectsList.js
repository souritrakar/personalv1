
import covitrack_cover  from "../public/projects/covitrack_cover.png"
import codepen_cover  from "../public/projects/codepen_cover.png"
import schooly_cover  from "../public/projects/schooly_cover.png"
import screenrecorder_cover  from "../public/projects/screenrecorder_cover.png"
import spacetagram_cover from "../public/projects/spacetagram_cover.png"
import portfolio_cover from "../public/projects/portfolio_cover.png"

const projectslist = [
    {
        name: 'CoviTrack',
        github: 'covitrack',
        demo: "/projects/covitrack.pdf",
        image: covitrack_cover
    },

    {
        name:'Spacetagram',
        github:'final-nasa-apod',
        demo:'http://spacetagram28.herokuapp.com/',
        image:spacetagram_cover
    },

    {
        name:'Codepen Mini Clone',
        github:'codepen-clone',
        demo:'https://codepen-clone-souritrakar.netlify.app',
        image:codepen_cover
    },

    {
        name:'Schooly',
        github:['schooly-mern', 'schooly'],
        image:schooly_cover
    },
    {
        name:'Simple Screen Recorder',
        github:'electron-screen-recorder',
        demo:'https://github.com/souritrakar/electron-screen-recorder',
        image:screenrecorder_cover
    },

    {
        name:"Personal Site",
        github:'portfoliov1',
        demo:'https://souritrakar.netlify.app',
        image:portfolio_cover
    },
    
]

export default projectslist