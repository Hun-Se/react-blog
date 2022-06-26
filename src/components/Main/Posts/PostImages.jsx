import '../../../DB/data.js';

export default function PostImages({thumbnailImg, authordd}){
    return <img src={thumbnailImg} alt={authordd}></img>
}