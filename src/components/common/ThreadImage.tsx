import Image from 'next/image';
import AnimalImage from 'public/animal.png'
import CatImage from 'public/cat.png'
import CuteImage from 'public/cute.png'
import DogImage from 'public/dog.png'
import LaughImage from 'public/laugh.png'
import RelaxImage from 'public/relax.png'

interface Props {
    category: String
}

const ThreadImage: React.FC<Props> = (props) => {
    let threadImage;
    
    switch (props.category) {
        case "animal":
            threadImage = AnimalImage;
            break;
        case "cat":
            threadImage = CatImage;
            break;
        case "cute":
            threadImage = CuteImage;
            break;
        case "dog":
            threadImage = DogImage;
            break;
        case "laugh":
            threadImage = LaughImage;
            break;
        default:
            threadImage = RelaxImage;
    }

    return (
        <Image src={threadImage} alt="スレッドイメージ" width={100} height={100} />
    )
}

export default ThreadImage;