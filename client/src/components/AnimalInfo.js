import axios from "axios"

import styled from "styled-components"
import { useHistory } from "react-router-dom"

const Outer = styled.div`
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 1rem;
    background-color: #fff9ee;
    border-radius: 10%;
`

const PictureAndText = styled.div`
    display: flex;
`

const TextSpace = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;

    & > h4 {
        margin: 0;
        padding: 0;
    }

    & > p {
        margin: 0;
        padding: 0;
    }
`

const ButtonSpace = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > button {
        background-color: transparent;
        color: red;
        text-decoration: underline;
    }
`

const Button = styled.button`
    margin: 1rem;
`
const url =
    process.env.REACT_APP_URL ||
    "http://ec2-54-180-102-202.ap-northeast-2.compute.amazonaws.com"

export default function AnimalInfo(props) {
    const history = useHistory()
    const deleteButtonHandler = () => {
        axios({
            url: url + `/deleteanimal`,
            method: "delete",
            data: {
                userId: props.animalcard.userId,
                id: props.animalcard.id,
            },
            withCredentials: true,
        }).then((res) => {
            history.push("/")
            history.push("/mypage")
        })
    }

    return (
        <div className="singleAnimalInfo">
            <Outer>
                <PictureAndText>
                    <TextSpace>
                        <div>
                            <h4>반려동물 종류</h4>
                            <p>{props.animalcard.animaltype}</p>
                        </div>
                        <div>
                            <h4>반려동물 이름</h4>
                            <p>{props.animalcard.animalname}</p>
                        </div>
                        <div>
                            <h4>출생년도</h4>
                            <p>{props.animalcard.animalyob}</p>
                        </div>
                    </TextSpace>
                </PictureAndText>
                <ButtonSpace>
                    <Button onClick={deleteButtonHandler}>삭제</Button>
                </ButtonSpace>
            </Outer>
        </div>
    )
}
