import React from 'react';
import Card from '../card/Card';
const ShowCreators: React.FC = () =>{
    return <div>
        <Card id={1} name="Mei Chan" description="Yonsei Alumni" youtube="https://www.youtube.com/@meichan" tiktok = "https://www.tiktok.com/@nhatkycuameichan?lang=en" insta="https://www.instagram.com/meichannnnn/" imageURL='https://yt3.googleusercontent.com/5u0O1frM5cvDjAy_boTS_8Sasu_R-qA2wbL7CFuqtioIiTUiOKHRe8KqQDlU9RTkkhsLbvyY280=s900-c-k-c0x00ffffff-no-rj'/>
        <Card id={2} name="Phillip Le" description="Vietnamese living in New York city" youtube="https://www.youtube.com/philliple" tiktok = "https://www.tiktok.com/@itsphilliple" insta="https://www.instagram.com/ninomars" imageURL='https://yt3.googleusercontent.com/89pTIPs8Wix-pf0owP9Mdym6mVPLCjb_cYxHLLE23i3mbXnCZ1qQ6yJUn8o_MyrMEPGmfErKnw=s900-c-k-c0x00ffffff-no-rj'/>
    </div>
}
export default ShowCreators;