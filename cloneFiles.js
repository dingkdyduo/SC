import fs  from 'fs';
import path from 'path';
import { simpleGit } from 'simple-git';

 
const  cloneIt    = async()=>{
    const dirname = path.dirname('json.js');
    const remote = `https://github.com/codingo/Ransomware-Json-Dataset.git`;

    const target = dirname  + "/jsonFiles";

    if (fs.existsSync(dirname  + "/jsonFiles")) {
        console.log(`${target} already clone`);
    } else {
        console.log(`cloning...`);
        const  SimpleGit = await simpleGit().clone(remote, target)
        console.log(`clone done`);
    }
}
 
export default cloneIt