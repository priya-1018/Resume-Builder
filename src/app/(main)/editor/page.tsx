import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
    title:"Design your Resume"
}




export default function Page(){
    return <ResumeEditor />;

}